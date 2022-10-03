
const url = "/minesweeper/new_game";

fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
