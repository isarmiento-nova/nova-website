//porvitional data array, make it a get request
var data = {
    0: {
        "name": "Primera infancia",
        "entity": "Ministerio de Educación Nacional de Colombia",
        "main_img_path": "./assets-nova/img/projects/proj1.jpg",
        "challenge": "“Necesitamos recursos que sirvan como complemento para capacitar a los estudiantes del uso de los laboratorios”",
        "solution": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dignissim mi nec tortor vehicula, ullamcorper semper elit congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur arcu nibh, vel <b>molestie urna ultricies et. Mauris magna</b> ipsum, faucibus et enim ut, tempor ornare magna. Mauris eu ante sit amet velit aliquam ultricies sit amet rutrum nulla.",
        "img2_path": "./assets-nova/img/projects/proj1_2.PNG",
        "more_img_slide": ["./assets-nova/img/projects/proj1_3.PNG", "./assets-nova/img/projects/proj1_4.PNG", "./assets-nova/img/projects/proj1_5.PNG"]
    },
    1: {
        "name": "Laboratorios de ciencias",
        "entity": "Universidad Nacional de Colombia",
        "main_img_path": "./assets-nova/img/projects/proj1.jpg",
        "challenge": "“Necesitamos recursos que sirvan como complemento para capacitar a los estudiantes del uso de los laboratorios”",
        "solution": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dignissim mi nec tortor vehicula, ullamcorper semper elit congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur arcu nibh, vel <b>molestie urna ultricies et. Mauris magna</b> ipsum, faucibus et enim ut, tempor ornare magna. Mauris eu ante sit amet velit aliquam ultricies sit amet rutrum nulla.",
        "img2_path": "./assets-nova/img/projects/proj1_2.PNG",
        "more_img_slide": ["./assets-nova/img/projects/proj1_3.PNG", "./assets-nova/img/projects/proj1_4.PNG", "./assets-nova/img/projects/proj1_5.PNG"]
    },
    2: {
        "name": "Curso Seguridad vial",
        "entity": "ANSV",
        "main_img_path": "./assets-nova/img/projects/proj1.jpg",
        "challenge": "“Necesitamos recursos que sirvan como complemento para capacitar a los estudiantes del uso de los laboratorios”",
        "solution": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dignissim mi nec tortor vehicula, ullamcorper semper elit congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur arcu nibh, vel <b>molestie urna ultricies et. Mauris magna</b> ipsum, faucibus et enim ut, tempor ornare magna. Mauris eu ante sit amet velit aliquam ultricies sit amet rutrum nulla.",
        "img2_path": "./assets-nova/img/projects/proj1_2.PNG",
        "more_img_slide": ["./assets-nova/img/projects/proj1_3.PNG", "./assets-nova/img/projects/proj1_4.PNG", "./assets-nova/img/projects/proj1_5.PNG"]
    },
    3: {
        "name": "Organizacional",
        "entity": "Colmena Seguros",
        "main_img_path": "./assets-nova/img/projects/proj1.jpg",
        "challenge": "“Necesitamos recursos que sirvan como complemento para capacitar a los estudiantes del uso de los laboratorios”",
        "solution": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dignissim mi nec tortor vehicula, ullamcorper semper elit congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur arcu nibh, vel <b>molestie urna ultricies et. Mauris magna</b> ipsum, faucibus et enim ut, tempor ornare magna. Mauris eu ante sit amet velit aliquam ultricies sit amet rutrum nulla.",
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
        html += '<div class="my-3" href="#" onclick="switchProjects(' + i + ')"><h1>' + data[i]["name"] + '</h1><h4>' + data[i]["entity"] + '</h4><a onclick="hideList()">Ver Proyecto</a></div>';
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
    $('#list').addClass('retract')
    $('#list').removeClass('open-list');
    $('.normal-elements').addClass('d-none')
    $('.special-elements').removeClass('d-none')
    $('.unal-text').addClass('d-none');
}

function showList() {
    $('#list').removeClass('retract');
    $('#list').addClass('open-list');
    $('.normal-elements').removeClass('d-none');
    $('.special-elements').addClass('d-none');
    $('.unal-text').removeClass('d-none');
    var carousel01 = document.getElementById("carousel-1");
    carousel01.classList.add("active");
    var carousel02 = document.getElementById("carousel-2");
    carousel02.classList.remove("active");
    var carousel03 = document.getElementById("carousel-3");
    carousel03.classList.remove("active");
}