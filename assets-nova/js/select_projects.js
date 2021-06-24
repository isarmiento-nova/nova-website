//porvitional data array, make it a get request
var data = {
    0: {
        "name": "Trabaja desde casa",
        "entity": "Fundación Grupo Social",
        "main_img_path": "./assets-nova/img/projects/proj1.jpg",
        "challenge": "“Brindar herramientas a los colaboradores de la Fundación Grupo Social para comprender, asumir y realizar el trabajo desde casa, como respuesta a las nuevas realidades tanto laborales como personales que trajo la pandemia por la covid-19.”",
        "solution": "Elaboramos una serie de recursos digitales que actualmente facilitan el trabajo remoto, propician el bienestar, contribuyen a la comunicación, mejoran el uso de herramientas tecnológicas y enseñan a tratar la información con seguridad y confidencialidad.",
        "img2_path": "./assets-nova/img/projects/proj1_2.PNG",
        "more_img_slide": ["./assets-nova/img/projects/proj1_3.PNG", "./assets-nova/img/projects/proj1_4.PNG", "./assets-nova/img/projects/proj1_5.PNG"]
    },
    1: {
        "name": "Laboratorios de ciencias",
        "entity": "Universidad Nacional de Colombia",
        "main_img_path": "./assets-nova/img/projects/proj2.jpg",
        "challenge": "“Necesitamos recursos que sirvan como complemento para capacitar a los estudiantes del uso de los laboratorios”",
        "solution": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dignissim mi nec tortor vehicula, ullamcorper semper elit congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur arcu nibh, vel <b>molestie urna ultricies et. Mauris magna</b> ipsum, faucibus et enim ut, tempor ornare magna. Mauris eu ante sit amet velit aliquam ultricies sit amet rutrum nulla.",
        "img2_path": "./assets-nova/img/projects/proj1_2.PNG",
        "more_img_slide": ["./assets-nova/img/projects/proj1_3.PNG", "./assets-nova/img/projects/proj1_4.PNG", "./assets-nova/img/projects/proj1_5.PNG"]
    },
    2: {
        "name": "Piezas de difusión",
        "entity": "Cultura Saber ICFES",
        "main_img_path": "./assets-nova/img/projects/proj3.jpg",
        "challenge": "“Difundir contenidos sobre temas del ambiente familiar y su relación con los aprendizajes de niños, jóvenes y adolescentes del país, que permitan conectar a estudiantes, familias y cuidadores.”",
        "solution": "Desarrollamos el sitio web para nuestro aliado, en el que compilamos sus materiales y brindamos la posibilidad de acceder rápida y efectivamente a la información utilizando flitros que la hacen más interactiva y precisa.",
        "img2_path": "./assets-nova/img/projects/proj1_2.PNG",
        "more_img_slide": ["./assets-nova/img/projects/proj1_3.PNG", "./assets-nova/img/projects/proj1_4.PNG", "./assets-nova/img/projects/proj1_5.PNG"]
    },
    3: {
        "name": "Salud Unal Contigo",
        "entity": "Universidad Nacional de Colombia",
        "main_img_path": "./assets-nova/img/projects/proj4.jpg",
        "challenge": "“Organizar y visibilizar los recursos que Salud UNAL Contigo ha diseñado para informar e influir positivamente a la sociedad en la toma de decisiones y comportamientos sobre temas de salud.”",
        "solution": "Desarrollamos el sitio web para nuestro aliado, en el que compilamos sus materiales y brindamos la posibilidad de acceder rápida y efectivamente a la información utilizando flitros que la hacen más interactiva y precisa.",
        "img2_path": "./assets-nova/img/projects/proj1_2.PNG",
        "more_img_slide": ["./assets-nova/img/projects/proj1_3.PNG", "./assets-nova/img/projects/proj1_4.PNG", "./assets-nova/img/projects/proj1_5.PNG"]
    },
    4: {
        "name": "Diplomado para docentes",
        "entity": "Ruraltic",
        "main_img_path": "./assets-nova/img/projects/proj1.jpg",
        "challenge": "“Necesitamos recursos que sirvan como complemento para capacitar a los estudiantes del uso de los laboratorios”",
        "solution": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dignissim mi nec tortor vehicula, ullamcorper semper elit congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur arcu nibh, vel <b>molestie urna ultricies et. Mauris magna</b> ipsum, faucibus et enim ut, tempor ornare magna. Mauris eu ante sit amet velit aliquam ultricies sit amet rutrum nulla.",
        "img2_path": "./assets-nova/img/projects/proj1_2.PNG",
        "more_img_slide": ["./assets-nova/img/projects/proj1_3.PNG", "./assets-nova/img/projects/proj1_4.PNG", "./assets-nova/img/projects/proj1_5.PNG"]
    },
    5: {
        "name": "Emisoras",
        "entity": "Gobernación de cundinamarca",
        "main_img_path": "./assets-nova/img/projects/proj1.jpg",
        "challenge": "“Necesitamos recursos que sirvan como complemento para capacitar a los estudiantes del uso de los laboratorios”",
        "solution": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dignissim mi nec tortor vehicula, ullamcorper semper elit congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur arcu nibh, vel <b>molestie urna ultricies et. Mauris magna</b> ipsum, faucibus et enim ut, tempor ornare magna. Mauris eu ante sit amet velit aliquam ultricies sit amet rutrum nulla.",
        "img2_path": "./assets-nova/img/projects/proj1_2.PNG",
        "more_img_slide": ["./assets-nova/img/projects/proj1_3.PNG", "./assets-nova/img/projects/proj1_4.PNG", "./assets-nova/img/projects/proj1_5.PNG"]
    },
}
function setProjects() {
    var html = "";
    for (let i = 0; i < Object.keys(data).length; i++) {
        //ver proyecto, just in case
        //html += '<div class="my-3 project-item" href="#" onclick="hideList()" onmouseover="switchProjects(' + i + ')"><h1>' + data[i]["name"] + '</h1><h4>' + data[i]["entity"] + '</h4><p class="show-indicator">Ver Proyecto</p></div>';
        html += '<div class="my-3 project-item" href="#" onclick="hideList()" onmouseover="switchProjects(' + i + ')"><h1>' + data[i]["name"] + '</h1><h4>' + data[i]["entity"] + '</h4></div>';
    }
    $("#project-container").html(html);
}


function switchProjects(num) {
    $("#visible-image").css("background-image", "url(" + data[num]["main_img_path"] + ")");
    $("#challenge-text").html("<h1 style=\"color: white;\">" + data[num]["challenge"] + "</h1><p class=\"mt-5\" style=\"color: white;\">" + data[num]["entity"] + "</p>");
    $("#how-text").html("<p style=\"color: white !important;\">" + data[num]["solution"] + "</p>");
    $("#second-image").html("<img class='width-100' src='" + data[num]["img2_path"] + "'>");
    $("#img-main-galery").html("<img class=\"width-100\" src='" + data[num]["more_img_slide"][0] + "'>");;
    var galery = "";
    for (let i = 0; i < data[num]["more_img_slide"].length; i++) {
        galery += "<div class=\"px-3 py-3 col-5 col-md-12\" onclick=\"replaceImage(" + num + "," + i + ")\"> <img class=\"width-100\"src=" + data[num]["more_img_slide"][i] + "></div>"
    }
    $("#list-of-images").html(galery);
}

function replaceImage(project, id) {
    $("#img-main-galery").html("<img class=\"width-100\" src='" + data[project]["more_img_slide"][id] + "'>");;
}


function hideList() {
    $('.unal-text').removeClass('opacity-show');
    $('.unal-text').addClass('opacity-hide');
    setTimeout(function () {
        $('#list').addClass('retract')
        $('#list').removeClass('open-list');
        $('.normal-elements').addClass('d-none')
        $('.special-elements').removeClass('d-none')
        setTimeout(function () {
            $('.unal-text').addClass('d-none');
        }, 200);

    }, 700)

}

function showList() {
    $('#list').removeClass('retract');
    $('#list').addClass('open-list');
    $('.normal-elements').removeClass('d-none');
    $('.special-elements').addClass('d-none');
    $('.unal-text').removeClass('d-none');
    setTimeout(function () {
        $('.unal-text').addClass('opacity-hide');
    }, 200)
    $('#carousel-portafolio .carousel-control-prev').addClass('d-none');
    var carousel01 = document.getElementById("carousel-1");
    carousel01.classList.add("active");
    var carousel02 = document.getElementById("carousel-2");
    carousel02.classList.remove("active");
    var carousel03 = document.getElementById("carousel-3");
    carousel03.classList.remove("active");
    setTimeout(function () {
        $('.unal-text').addClass('opacity-show');
        $('.unal-text').removeClass('opacity-hide');
    }, 700);
}