$(function() {
    var mode = false; //App mode Running or Not
    var timeCounter = 0; //Counts Time
    var lapCounter = 0; //Counts Lap Time
    var actionRun; // to start the loop
    var numberOfLaps = 0;

    var timeMinutes, timeSeconds, timeCentiSeconds, lapMinutes, lapSeconds, lapCentiSeconds; //time variables

    //When App is loaded
    hideShow("#start", "#lap");




    function hideShow(X, Y) {
        $(".control").hide();
        $(X).show();
        $(Y).show();
    };

});