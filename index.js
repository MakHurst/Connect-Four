document.addEventListener("DOMContentLoaded", () =>
{
    const squares = document.querySelectorAll('.grid div')
    const result = document.querySelector("#result")
    const displayCurrentPlayer = document.querySelector("#current-player")
    let currentPlayer = 1  // used let because it will not always be player 1's turn

    for (let i = 0; i < squares.length; i++) {
        squares[i].onclick = () => {
            // alert("You have clicked square" + i)
            // if the square below your current square is taken, you can go above it
            if (squares[i + 7].classList.contains('taken')) {
                if (currentPlayer == 1){
                    squares[1].classList.add('taken')
                    squares[1].classList.add('player-one')
                    currentPlayer = 2
                    displayCurrentPlayer.innerHTML = currentPlayer

                }
            }
        
        }
    }
})