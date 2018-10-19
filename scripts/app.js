$(document).ready(function() {

    let $mainContainer = $('#main-container');

    let template = Handlebars.compile(document.getElementById('score-card-template').innerHTML);

    let players = [
        {name: 'Matthew', total: 441, turnScores: [23, 24, 25], turnTotal: 50, average: 32}
    ]

    let defaultPlayer = {
        name: "",
        total: 301,
        turnScores: [],
        turnTotal: 0,
        average: 0
    };

    


    $mainContainer.append(template(players[0]));

    function createNewPlayer(name) {
        var newPlayer = $.extend(true, {}, defaultPlayer);
        newPlayer.name = name;
        return newPlayer;
    }
});