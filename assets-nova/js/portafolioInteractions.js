
function interactionPortafolio() {
    if ($('.anim-icons').length == 0) {
        showPortafolio();
    }
    else {
        hidePortafolio();
    }
}

function showPortafolio() {
    $('#icons').children('div').removeClass("reverse-anim-icons");
    $('#text1').removeClass("reverse-anim-text");
    $('#text2').removeClass("reverse-anim-text");
    $('#text1').removeClass("base-text");
    $('#text2').removeClass("base-text");
    $('#icons').children('div').addClass("anim-icons");
    $('#text1').addClass("anim-text");
    $('#text2').addClass("anim-text");
    var anim = anime({
        targets: "#icons",
        height: [$('#icons').height(), 0],
        duration: 600,
        delay: 2400,
    });
    console.log("fuck")
}

function hidePortafolio() {

    $('#icons').children('div').removeClass("anim-icons");
    $('#text1').removeClass("anim-text");
    $('#text2').removeClass("anim-text");
    $('#icons').children('div').addClass("reverse-anim-icons");
    $('#text1').addClass("reverse-anim-text");
    $('#text2').addClass("reverse-anim-text");
    var anim2 = anime({
        targets: "#icons",
        height: [0, $('#icons').height()],
        duration: 600
    });
    console.log("maldita sea")
    status = 0;
}
