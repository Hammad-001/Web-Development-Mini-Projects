$(function() {
    var mode = false; //App mode Running or Not
    var timeCounter = 0; //Counts Time
    var lapCounter = 0; //Counts Lap Time
    var actionRun; // to start the loop
    var numberOfLaps = 0;

    var timeMinutes, timeSeconds, timeCentiSeconds, lapMinutes, lapSeconds, lapCentiSeconds; //time variables

    //When App is loaded just show start and ap button
    hideShow("#start", "#lap");

    $("#start").click(function() {
        mode = true;
        hideShow("#stop", "#lap");
        startAction();
    });

    $("#stop").click(function() {
        hideShow("#resume", "#reset");
        stopAction();
    });

    $("#resume").click(function() {
        hideShow("#stop", "#lap");
        startAction();
    });

    $("#reset").click(function() {
        location.reload();
    });

    $("#lap").click(function() {
        if (mode) {
            clearInterval(actionRun);
            lapCounter = 0;
            setLap();
            startAction();
        }
    });

    function setLap() {
        numberOfLaps++;
        varLapData = "<div class='lap-added'>" +
            "<div class='lap-number'>" +
            "Lap" + numberOfLaps +
            "</div>" +
            "<div class='lap-time'>" +
            " <span> " + format(lapMinutes) + " </span>" +
            " : <span> " + format(lapSeconds) + " </span>" +
            " : <span> " + format(lapCentiSeconds) + " <span> " + "</div>" +
            "<div class='clear'></div></div>";
        $(varLapData).prependTo("#lap-box");
    };

    function stopAction() {
        clearInterval(actionRun);
    };

    function startAction() {
        actionRun = setInterval(function() {
            timeCounter++;
            if (timeCounter >= 60 * 100 * 100) {
                timeCounter = 0;
            }
            lapCounter++;
            if (lapCounter >= 60 * 100 * 100) {
                lapCounter = 0;
            }
            updateTime();
        }, 10); //after every 10ms
    };

    function updateTime() {
        // time
        timeMinutes = Math.floor(timeCounter / 6000); //minutes
        timeSeconds = Math.floor((timeCounter % 6000) / 100); //Seconds
        timeCentiSeconds = (timeCounter % 6000) % 100;

        console.log(timeMinutes)
            //update time
        $("#timeminutes").text(format(timeMinutes));
        $("#timeseconds").text(format(timeSeconds));
        $("#timecentiseconds").text(format(timeCentiSeconds));

        //lap time
        lapMinutes = Math.floor(lapCounter / 6000); //minutes
        lapSeconds = Math.floor((lapCounter % 6000) / 100); //Seconds
        lapCentiSeconds = (lapCounter % 6000) % 100;

        //update lap time
        $("#lapminutes").text(format(lapMinutes));
        $("#lapseconds").text(format(lapSeconds));
        $("#lapcentiseconds").text(format(lapCentiSeconds));
    };


    // this function will format a number to 2 digit number
    function format(number) {
        if (number < 10) {
            return '0' + number
        } else {
            return number
        }
    };

    //this function will hide all controls except X and Y
    function hideShow(X, Y) {
        $(".control").hide();
        $(X).show();
        $(Y).show();
    };

});