window.addEventListener('load', function () {
    const gameboard = document.getElementById("gameboard");
    const url = "/minesweeper/new_game";

    fetch(url)
        .then((response) => response.json())
        .then((data) => createGameboard(data));


    function createGameboard(data) {
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].length; j++) {
                // console.log(i, j);
                const newSquare = document.createElement("div");
                newSquare.classList.add("cell");
                newSquare.setAttribute("id", `${i}_${j}`);
                gameboard.appendChild(newSquare);
            }
        }
    }

    gameboard.addEventListener('click', (e) => {console.log(e.target)});
})
