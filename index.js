document.addEventListener("DOMContentLoaded", () =>
{
    const squares = document.querySelectorAll('.grid div')
    const result = document.querySelector("#result")
    const displayCurrentPlayer = document.querySelector("#current-player")
    let currentPlayer = 1  // used let because it will not always be player 1's turn
    function checkBoard(){
        

    }

    for (let i = 0; i < squares.length; i++) {
        squares[i].onclick = () => {
            // alert("You have clicked square" + i)
            // if the square below your current square is taken, you can go above it
            if (squares[i + 7].classList.contains('taken')) {
                if (currentPlayer == 1){
                    squares[i].classList.add('taken')
                    squares[i].classList.add('player-one')
                    currentPlayer = 2
                    displayCurrentPlayer.innerHTML = currentPlayer

                }
                else if (currentPlayer == 2){
                    squares[i].classList.add('taken')
                    squares[i].classList.add('player-two')
                    currentPlayer = 1
                    displayCurrentPlayer.innerHTML = currentPlayer

                }
            else alert("You cannot chose that box")
            }
        
        }
    }
})