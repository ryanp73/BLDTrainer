let pieces = {
    "edges": {
        "YG": "A",
        "YR": "B",
        "YB": "C",
        "YO": "D",
        "OY": "E",
        "OB": "F",
        "OW": "G",
        "OG": "H",
        "BY": "I",
        "BR": "J",
        "BO": "L",
        "RY": "M",
        "RG": "N",
        "RW": "O",
        "RB": "P",
        "GY": "Q",
        "GO": "R",
        "GW": "S",
        "GR": "T",
        "WR": "V",
        "WG": "W",
        "WO": "X"
    },
    "corners": {
        "YGR": "B",
        "YRB": "C",
        "YBO": "D",
        "OYB": "F",
        "OBW": "G",
        "OWG": "H",
        "BOY": "I",
        "BYR": "J",
        "BRW": "K",
        "BWO": "L",
        "RBY": "M",
        "RYG": "N",
        "RGW": "O",
        "RWB": "P",
        "GRY": "Q",
        "GOW": "S",
        "GWR": "T",
        "WOB": "U",
        "WBR": "V",
        "WRG": "W",
        "WGO": "X"
    }
};

function getColorName(letter) {
    if (letter == "R") {
        return "red";
    }
    else if (letter == "G") {
        return "green";
    }
    else if (letter == "B") {
        return "blue";
    }
    else if (letter == "W") {
        return "white";
    }
    else if (letter == "O") {
        return "orange";
    }
    else {
        return "yellow";
    }
}

function drawEdge(pieceName) {
    let canvas = document.querySelector("canvas");
    let context = canvas.getContext("2d");

    context.fillStyle = getColorName(pieceName[0]);
    context.fillRect(0, 30, 300, 270);

    context.fillStyle = getColorName(pieceName[1]);
    context.fillRect(0, 0, 300, 20);
}

function drawCorner(pieceName) {
    let canvas = document.querySelector("canvas");
    let context = canvas.getContext("2d");

    context.fillStyle = getColorName(pieceName[0]);
    context.fillRect(0, 30, 270, 270);

    context.fillStyle = getColorName(pieceName[1]);
    context.fillRect(0, 0, 270, 20);

    context.fillStyle = getColorName(pieceName[2]);
    context.fillRect(280, 30, 20, 270);
}

function checkLetter(input, desired, startTime) {
    if (input == desired) {
        let endTime = new Date();
        document.getElementById('message').innerHTML = "Correct!";
        document.getElementById('time').innerHTML = (endTime - startTime) / 1000 + "";
    }
    else {
        document.getElementById('message').innerHTML = "Wrong!";
    }
}

function generatePiece() {
    let pieceType = document.querySelector('input[name="type"]:checked').value;
    document.getElementById('message').innerHTML = "";
    document.getElementById('time').innerHTML = "";

    let letter = "";
    let startTime = new Date();

    if (pieceType == "corners") {
        let corners = Object.keys(pieces.corners);
        let piece = corners[Math.floor(Math.random() * corners.length)];
        drawCorner(piece);
        letter = pieces.corners[piece];
    }
    else {
        let edges = Object.keys(pieces.edges);
        let piece = edges[Math.floor(Math.random() * edges.length)];
        drawEdge(piece);
        letter = pieces.edges[piece];
    }


    document.addEventListener('keypress', (e) => {
        checkLetter(e.key, letter.toLowerCase(), startTime);
    });
}

document.getElementById('begin').addEventListener('click', (e) => {
    generatePiece();
});
