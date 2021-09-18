const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');


// POST user into my_parties table to join a party
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('User id', req.user.id);
    console.log('Party id', req.body.partyId);

    let sqlText, sqlParams;

    // Double check to see if the logged in user is already apart of the game
    // I know the if statement is not valid since it isn't checking SQL
    if (req.user.id === 'user_id') {
        alert('You are already apart of this party.');
        return;
    } else {
        sqlText = `
        INSERT INTO "users_parties" ("users_id", "parties_id")
        VALUES ($1, $2);
        `;

        sqlParams = [
            req.user.id,
            req.body.partyId
        ]
    }
    
    pool.query(sqlText, sqlParams).then(response => {
        console.log('Join Party POST working', response);
        res.sendStatus(201)
    }).catch(error => {
        console.error('Join Party Post Error', error);
        res.sendStatus(500);
    })
});

// POST used to send email to user
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('party info', req.body);
    
    console.log('owner username', req.body.owner);
    
    const outputTxt = `
        <p>Hello, ${req.body.owner}</p>
        <p>${req.user.username} would like to join your game of ${req.body.board_game} at ${req.body.address}</p>

        <p>Please check log in to your account if you would like to change your player lineup</p>

        <p>Sincerely,</p>
        <p>PartyUp Team</p>
    `;

    "use strict";
    const nodemailer = require("nodemailer");

    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        let testAccount = await nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: testAccount.user, // generated ethereal user
                pass: testAccount.pass, // generated ethereal password
            },
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: req.user.email, // sender address
            to: req.body.email, // list of receivers
            subject: "New Player Request", // Subject line
            text: outputTxt, // plain text body
            html: "<b>Hello world?</b>", // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }

    main().catch(console.error);
})

module.exports = router;