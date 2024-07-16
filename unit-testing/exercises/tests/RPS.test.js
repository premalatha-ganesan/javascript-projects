const whoWon = require('../RPS.js');

describe("whoWon", function() {
    test("Both players selected same, Outcome is TIE", function () {
        let result = whoWon('rock', 'rock');
        expect(result).toBe("TIE!");
    });

    test("Player1 selected rock, player2 selected paper, player 2 wins", function () {
        let result = whoWon('rock', 'paper');
        expect(result).toBe("Player 2 wins!");
    });

    test("Player1 selected paper, player2 selected scissors, player 2 wins", function () {
        let result = whoWon('paper', 'scissors');
        expect(result).toBe("Player 2 wins!");
    });

    test("Player1 selected scissors, player2 selected rock, player 2 wins", function () {
        let result = whoWon('scissors', 'rock');
        expect(result).toBe("Player 2 wins!");
    });

    test("Player1 selected rock, player2 selected scissors, player 1 wins", function () {
        let result = whoWon('rock', 'scissors');
        expect(result).toBe("Player 1 wins!");
    });

});
