<div className="container">

    <div id="recentPosts">
        <h3 id="upcomingEvents">UPCOMING EVENTS</h3>
        <div id="cardContainers" class="overflow-auto">
            {upcoming.map((party, index) =>
                <div class="card" className="upcomingCards" key={index}>
                    <h5 class="card-header"> {party.board_game}
                        <button className="upcomingBtns" data-bs-toggle="modal" data-bs-target="#gameInfo" onClick={() => { displayInfo(party) }}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16"><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" /></svg></button>
                        <button className="upcomingBtns" onClick={() => { joinParty(party) }}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16"> <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /><path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" /></svg></button>
                    </h5>
                    <div class="card-body">
                        <p>{formatDate(party.date_time)}</p>
                        <p>{formatTime(party.date_time)}</p>
                    </div>
                </div>
            )}
        </div>
    </div>

    <div class="modal fade" id="gameInfo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{info.board_game}</h5>
                </div>
                <div class="modal-body">
                    <h6 class="card-subtitle mb-2 text-muted">{info.location}</h6>
                    <p class="card-text">Created by: {info.username}</p>
                    <p class="card-text">Number of Players: {info.number_of_players}</p>
                    <p class="card-text">Experience: {info.experience}</p>

                    <div>
                        Current Players:
                        {players.map((player, index) => (
                            <div key={index}>
                                <li>{player.username}</li>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="searchResults">
        {
            searchIsActive ?
                <SearchResults />
                :
                <WelcomePage />
        }

    </div>

</div>