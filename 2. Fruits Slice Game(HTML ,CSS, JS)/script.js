var playing = false; // to keep track if user is playing or not
var score; //keep track of user score
var step; //fruit steps
var life; //user life
var move; // start moving fruits
var Fruits = ["apple", "apricot", "banana", "cherry", "mango", "orange", "pineapple", "strawberry"]; //fuits images

$(function() {
    $("#start").click(function() {
        if (playing) {
            location.reload(); // if user is playing then reload
        } else {
            playing = true; //laying is set to true
            score = 0; //score is set to 0
            life = 4; // life is set to 4
            $("#gameover").hide(); // gameover is hidden
            $("#scorevalue").html(score); //scorevalue is set
            addLife(); //life is shown
            $("#start").html("Reset Game"); //start game is changed to reset game
            startGame(); // game started
        }
    });

    function addLife() {
        $("#Life").empty(); //first empty the whole images in it
        for (i = 0; i < life; i++) { // then add images according to life variable
            $("#Life").append("<img src='images/heart.png' class='heart'>"); //append images
        }
        $("#life").show(); //current life is shown
    }

    function chooseFruit() {
        $("#fruits").attr('src', 'images/' + Fruits[Math.round(7 * Math.random())] + '.png'); //pick random fruit
        $("#fruits").css({ "left": Math.round(550 * Math.random()), "top": "-50px" }); //set random position
        $("#fruits").show(); //fruits showed up
    }

    function moveFruit() {
        step = 1 + Math.round(3 * Math.random()); //+1 to make step not equal 0 which means fruit doesn't move
        move = setInterval(function() {
            $("#fruits").css({
                "top": $("#fruits").position().top + step,
            });
            if ($("#fruits").position().top > $("#window").height()) {
                if (life > 1) {
                    life -= 1;
                    addLife();
                    chooseFruit();
                    step = 1 + Math.round(5 * Math.random());
                } else {
                    playing = false;
                    $("#finalScore").html($("#scorevalue").text());
                    $("#gameover").show();
                    $("#start").html("Start Game");
                    $("#life").hide();
                    stopGame();
                }
            }
        }, 10);
    }

    $("#fruits").mouseover(function() {
        score += 1;
        $("#scorevalue").text(score);
        document.getElementById("sliceSound").play(); //using Javascript
        //$("#sliceSound")[0].play(); //using Jquery

        clearInterval(move);
        $("#fruits").hide("explode", 500);
        setTimeout(startGame, 500);
    });

    function startGame() {
        chooseFruit();
        moveFruit();
    }

    function stopGame() {
        clearInterval(move);
        $("#fruits").hide();
    }
});