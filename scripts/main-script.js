class Player
{
    constructor(name)
    {
        this.name = name;
        this.score = 0;
        this.moves = [];
    }

    setMarker(marker)
    {
        this.marker = marker;
    }
}

class board
{
    constructor(p1, p2)
    {
        this.p1 = p1;
        this.p2 = p2;
        this.currentP = "";
        let turnDecider = Math.floor(Math.random() * 2); // 0 = p1 first, 1 = p2 first
        if (turnDecider == 0)
        {
            this.currentP = p1;
        } else if (turnDecider == 1) {
            this.currentP = p2;
        }
        this.board = {b11:"", b12:"", b13:"",
                      b21:"", b22:"", b23:"",
                      b31:"", b32:"", b33:""};
    }

    setupBoard()
    {
        document.getElementsByClassName("b-11")[0].addEventListener("click", function() {

        });
    }

    gameOver()
    {
        if(this.board.b11.length == 0 || this.board.b12.length == 0 || this.board.b13.length == 0 ||
           this.board.b21.length == 0 || this.board.b22.length == 0 || this.board.b23.length == 0 ||
           this.board.b31.length == 0 || this.board.b32.length == 0 || this.board.b33.length == 0) // tie
        {
            return false;
        } else {
            return true;
        }
    }
}

function back(order)
{
    if (order == "first")
    {
        document.getElementsByClassName("pvp-pick")[0].style.display = "inline-block";
        document.getElementsByClassName("ai-pick")[0].style.display = "inline-block";
        document.getElementsByClassName("p1-name")[0].style.display = "none";
        document.getElementsByClassName("p2-name")[0].style.display = "none";
        document.getElementsByClassName("pvp-name-pick")[0].style.display = "none";
        document.getElementsByClassName("ai-name-pick")[0].style.display = "none";
        document.getElementsByClassName("back-first")[0].style.display = "none";
    } else if (order == "second") {

    }
}

function pickMode(mode)
{
    document.getElementsByClassName("pvp-pick")[0].style.display = "none";
    document.getElementsByClassName("ai-pick")[0].style.display = "none";

    if (mode == "pvp")
    {
        document.getElementsByClassName("p1-name")[0].style.display = "block";
        document.getElementsByClassName("p2-name")[0].style.display = "block";
        document.getElementsByClassName("pvp-name-pick")[0].style.display = "block";
    } else if (mode == "ai") {
        document.getElementsByClassName("p1-name")[0].style.display = "block";
        document.getElementsByClassName("ai-name-pick")[0].style.display = "block";
    }
    document.getElementsByClassName("back-first")[0].style.display = "block";
}

function pickName(mode)
{
    if (mode == "pvp")
    {
        let p1Name = document.getElementsByClassName("p1-name")[0];
        let p2Name = document.getElementsByClassName("p2-name")[0];
        if (p1Name.value.trim().length < 2 || p2Name.value.trim().length < 2)
        {
            alert("Please provide proper names");
        } else {
            document.getElementsByClassName("main-title")[0].style.display = "none";
            document.getElementsByClassName("p1-name")[0].style.display = "none";
            document.getElementsByClassName("p2-name")[0].style.display = "none";
            document.getElementsByClassName("pvp-name-pick")[0].style.display = "none";  
            document.getElementsByClassName("p1-title")[0].style.display = "inline-block";
            document.getElementsByClassName("p2-title")[0].style.display = "inline-block";
            document.getElementsByClassName("pick-marker")[0].style.display = "block";
            document.getElementById("start-pvp").style.display = "block";
            document.getElementsByClassName("game-board")[0].style.display = "block";
            document.getElementById("start-pvp").addEventListener("click", function(){
                const player1 = new Player(p1Name.value);
                const player2 = new Player(p2Name.value);
                startGame("pvp", player1, player2);
            });
        }
    } else if (mode == "ai") {
        let pName = document.getElementsByClassName("p1-name")[0];

        if (pName.value.trim().length < 2)
        {
            alert("Please provide a proper name");
        } else { 
            document.getElementsByClassName("main-title")[0].style.display = "none";
            document.getElementsByClassName("p1-name")[0].style.display = "none";
            document.getElementsByClassName("ai-name-pick")[0].style.display = "none";
            document.getElementsByClassName("p1-title")[0].style.display = "inline-block";
            document.getElementsByClassName("ai-title")[0].style.display = "inline-block";
            document.getElementsByClassName("pick-marker")[0].style.display = "block";
            document.getElementsByClassName("p2-O-text")[0].style.display = "none";
            document.getElementsByClassName("p2-X-text")[0].style.display = "none";
            document.getElementsByClassName("p2-O")[0].style.display = "none";
            document.getElementsByClassName("p2-X")[0].style.display = "none";
            document.getElementById("start-ai").style.display = "block";
            document.getElementsByClassName("game-board")[0].style.display = "block";
        }
    }
    //document.getElementsByClassName("back-second")[0].style.display = "block";
}

function startGame(mode, p1, p2)
{
    if (mode == "pvp")
    {
        let p1O = document.getElementsByClassName("p1-O")[0];
        let p1X = document.getElementsByClassName("p1-X")[0];
        let p2O = document.getElementsByClassName("p2-O")[0];
        let p2X = document.getElementsByClassName("p2-X")[0];
        if ((p1O.checked && p2O.checked) || (p1X.checked && p2X.checked))
        {
            alert("Both players cannot have the same marker!");
        } else {
            if (p1O.checked)
            {
                p1.setMarker('O');
            } else if (p1X.checked) {
                p1.setMarker('X');
            } else if (p2O.checked) {
                p2.setMarker('O');
            } else if (p2X.checked) { 
                p2.setMarker('X');
            }
            document.getElementsByClassName("pick-marker")[0].style.display = "none";
            document.getElementsByClassName("p1-score")[0].style.display = "inline-block";
            document.getElementsByClassName("p2-score")[0].style.display = "inline-block";
            document.getElementsByClassName("p1-point")[0].innerHTML = p1.score;
            document.getElementsByClassName("p2-point")[0].innerHTML = p2.score;
        }
    } else if (mode == "ai") {
        
    }
}

document.getElementsByClassName("p1-name")[0].addEventListener("click", function() {
    if (document.getElementsByClassName("p1-name")[0].value == "Player 1 Name")
    {
      document.getElementsByClassName("p1-name")[0].value = "";
    }
});

document.getElementsByClassName("p1-name")[0].addEventListener("blur", function() {
    if (document.getElementsByClassName("p1-name")[0].value == "")
    {
      document.getElementsByClassName("p1-name")[0].value = "Player 1 Name";
    }
});

document.getElementsByClassName("p2-name")[0].addEventListener("click", function() {
  if (document.getElementsByClassName("p2-name")[0].value == "Player 2 Name")
  {
    document.getElementsByClassName("p2-name")[0].value = "";
  }
});

document.getElementsByClassName("p2-name")[0].addEventListener("blur", function() {
  if (document.getElementsByClassName("p2-name")[0].value == "")
  {
    document.getElementsByClassName("p2-name")[0].value = "Player 2 Name";
  }
});