$(function() {
    $("#button-1").click(function() {
        console.log("kamsdkasdk")
        hide(this.id);
        rotate(1);
    });
    $("#button-2").click(function() {
        hide(this.id);
        rotate(2);
    });
    $("#button-3").click(function() {
        hide(this.id);
        rotate(3);
    });
    $("#button-4").click(function() {
        hide(this.id);
        rotate(4);
    });
    $("#button-5").click(function() {
        hide(this.id);
        rotate(5);
    });
    $("#button-6").click(function() {
        hide(this.id);
        rotate(6);
    });
    $("#button-7").click(function() {
        hide(this.id);
        rotate(7);
    });
    $("#button-8").click(function() {
        hide(this.id);
        rotate(8);
    });
    $("#button-9").click(function() {
        hide(this.id);
        rotate(9);
    });

    function rotate(box) {
        $("#box-" + box).css({ "background-color": "pink", "transform": "rotateY(180deg)", "transition": "0.4s ease-in" });
    }

    function hide(id) {
        $("#" + id).css("visibility", "hidden");
    }
});