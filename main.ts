let player_1 = 0
let Player_2 = 0
input.onButtonPressed(Button.A, function () {
    player_1 = randint(1, 10)
    if (player_1 == 1) {
        basic.showNumber(1)
    } else if (player_1 == 2) {
        basic.showNumber(2)
    } else if (player_1 == 3) {
        basic.showNumber(3)
    } else if (player_1 == 4) {
        basic.showNumber(4)
    } else if (player_1 == 5) {
        basic.showNumber(5)
    } else if (player_1 == 6) {
        basic.showNumber(6)
    } else if (player_1 == 7) {
        basic.showNumber(7)
    } else if (player_1 == 8) {
        basic.showNumber(8)
    } else if (player_1 == 9) {
        basic.showNumber(9)
    } else if (player_1 == 10) {
        basic.showNumber(10)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (player_1 == Player_2) {
        basic.showString("Tie!")
    } else if (player_1 < Player_2) {
        basic.showString("Player 2 wins")
    } else if (player_1 > Player_2) {
        basic.showString("Player 1 Wins")
    }
})
input.onButtonPressed(Button.B, function () {
    Player_2 = randint(1, 10)
    if (Player_2 == 1) {
        basic.showNumber(1)
    } else if (Player_2 == 2) {
        basic.showNumber(2)
    } else if (Player_2 == 3) {
        basic.showNumber(3)
    } else if (Player_2 == 4) {
        basic.showNumber(4)
    } else if (Player_2 == 5) {
        basic.showNumber(5)
    } else if (Player_2 == 6) {
        basic.showNumber(6)
    } else if (Player_2 == 7) {
        basic.showNumber(7)
    } else if (Player_2 == 8) {
        basic.showNumber(8)
    } else if (Player_2 == 9) {
        basic.showNumber(9)
    } else if (Player_2 == 10) {
        basic.showNumber(10)
    }
})
