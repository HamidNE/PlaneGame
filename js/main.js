/*------------------
    Variables
------------------*/

const level = 1;
let rowNumber = 1;
let planePosition = 4;
const bord = $('#bord');
const plane = $('#plane');
const cave = `
    <div class="col" data-col="2">
        <img src="img/cave.svg" alt="">
    </div>
`;

/*-------------------
    Functions
-------------------*/

function createRow(rowNumber) {
    const rand = Math.round(Math.random() * 15) % 15;
    return `
        <div class="row" data-row="${rowNumber}">
            <div class="col" data-col="1">${rand === 1 ? '<img src="img/cave.svg">' : '' }</div>
            <div class="col" data-col="2">${rand === 2 ? '<img src="img/cave.svg">' : '' }</div>
            <div class="col" data-col="3">${rand === 3 ? '<img src="img/cave.svg">' : '' }</div>
            <div class="col" data-col="4">${rand === 4 ? '<img src="img/cave.svg">' : '' }</div>
            <div class="col" data-col="5">${rand === 5 ? '<img src="img/cave.svg">' : '' }</div>
            <div class="col" data-col="6">${rand === 6 ? '<img src="img/cave.svg">' : '' }</div>
            <div class="col" data-col="7">${rand === 7 ? '<img src="img/cave.svg">' : '' }</div>
            <div class="col" data-col="8">${rand === 8 ? '<img src="img/cave.svg">' : '' }</div>
            <div class="col" data-col="9">${rand === 9 ? '<img src="img/cave.svg">' : '' }</div>
            <div class="col" data-col="10">${rand === 10 ? '<img src="img/cave.svg">' : '' }</div>
        </div>
    `;
}

$(document).keydown(function( event ) {
    if (event.which === 37) {
        if (planePosition > 0) {
            planePosition--;
            plane.css('left', planePosition * 30 + 16);
        }
    } else if (event.which === 39) {
        if (planePosition < 8) {
            planePosition++;
            plane.css('left', planePosition * 30 + 16);
        }
    }
});

function stopGame(col) {
    console.log(col);
    clearInterval(timer);
}

const timer = setInterval(function () {
    bord.append(createRow(rowNumber++));
    if (rowNumber > 15) {
        const col1 = bord.children().eq(1).find(`.col[data-col=${planePosition + 1}]`);
        const col2 = bord.children().eq(1).find(`.col[data-col=${planePosition + 2}]`);
        const col3 = bord.children().eq(2).find(`.col[data-col=${planePosition + 1}]`);
        const col4 = bord.children().eq(2).find(`.col[data-col=${planePosition + 2}]`);

        col1.find('img').length !== 0 ? stopGame(col1) : null;
        col2.find('img').length !== 0 ? stopGame(col2) : null;
        col3.find('img').length !== 0 ? stopGame(col3) : null;
        col4.find('img').length !== 0 ? stopGame(col4) : null;

        bord.children().first().remove()
    }
}, 700);