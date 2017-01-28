var applyCSS = () => {
    $("#fill").css({
        "background-color": color,
        "width": fill_height
    });
    $(".triangle").css("background", "linear-gradient(115deg, white, white 50%," + color + " 50%, " + color + " 100%)");
    $(".button").hover(() => {
            $(".button").css("color", color);
        },
        () => {
            $(".button").css("color", "black");
        });
}
