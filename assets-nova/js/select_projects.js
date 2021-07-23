//porvitional data array, make it a get request
var value=0;

var data = {
    0: {
        "name": "Trabaja desde casa",
        "entity": "Fundación Grupo Social",
        "main_img_path": "./assets-nova/img/projects/grupo_social.jpg",
        "challenge": "“Brindar herramientas a los colaboradores de la Fundación Grupo Social para comprender, asumir y realizar el trabajo desde casa, como respuesta a las nuevas realidades tanto laborales como personales que trajo la pandemia por la covid-19.”",
        "solution": "Elaboramos una serie de recursos digitales que actualmente facilitan el trabajo remoto, propician el bienestar, contribuyen a la comunicación, mejoran el uso de herramientas tecnológicas y enseñan a tratar la información con seguridad y confidencialidad.",
        "img2_path": "",
        "video": "https://www.youtube.com/embed/s9vRrZc1OdU",
        "more_img_slide": ["./assets-nova/img/projects/proj1_3.PNG", "./assets-nova/img/projects/proj1_4.PNG", "./assets-nova/img/projects/proj1_5.PNG"]
    },
    1: {
        "name": "Piezas de difusión",
        "entity": "Cultura Saber ICFES",
        "main_img_path": "./assets-nova/img/projects/cultura_ICFES.png",
        "challenge": "“Difundir contenidos sobre temas del ambiente familiar y su relación con los aprendizajes de niños, jóvenes y adolescentes del país, que permitan conectar a estudiantes, familias y cuidadores.”",
        "solution": "Diseñamos videos animados y piezas de difusión con situaciones del contexto escolar en las que se descubre la conexión entre aprendizajes, habilidades personales y competencias ciudadanas, enriquecidos con subtítulos y lengua de señas para impactar y llegar a un público diverso.",
        "img2_path": "",
        "video": "https://www.youtube.com/embed/ZLbkuZDxk1o",
        "more_img_slide": ["./assets-nova/img/projects/proj1_3.PNG", "./assets-nova/img/projects/proj1_4.PNG", "./assets-nova/img/projects/proj1_5.PNG"]
    },
    2: {
        "name": "Salud Unal Contigo",
        "entity": "Universidad Nacional de Colombia",
        "main_img_path": "./assets-nova/img/projects/salud_unal.jpg",
        "challenge": "“Organizar y visibilizar los recursos que Salud UNAL Contigo ha diseñado para informar e influir positivamente a la sociedad en la toma de decisiones y comportamientos sobre temas de salud.”",
        "solution": "Desarrollamos el sitio web para nuestro aliado, en el que compilamos sus materiales y brindamos la posibilidad de acceder rápida y efectivamente a la información utilizando flitros que la hacen más interactiva y precisa.",
        "img2_path": "./assets-nova/img/projects/unal_contigo.gif",
        "video": "",
        "more_img_slide": ["./assets-nova/img/projects/proj1_3.PNG", "./assets-nova/img/projects/proj1_4.PNG", "./assets-nova/img/projects/proj1_5.PNG"]
    },
    3: {
        "name": "Universidad Incluyente",
        "entity": "Observatorio de discapacidad de la Universidad Nacional de Colombia",
        "main_img_path": "./assets-nova/img/projects/incluyente.jpg",
        "challenge": "“Dar a conocer la Ruta General de Acompañamiento de la UNAL, una red que estructura y organiza la respuesta institucional necesaria para favorecer la participación de estudiantes con discapacidad.”",
        "solution": "Estructuramos una página web en la que la comunidad estudiantil encuentra explicaciones y actividades en torno a esta ruta, agrupadas en recursos audiovisuales, subtitulados y en lengua de señas que favorecen su accesibilidad.",
        "img2_path": "./assets-nova/img/projects/observatorio_solucion.jpg",
        "video": "",
        "more_img_slide": ["./assets-nova/img/projects/proj1_3.PNG", "./assets-nova/img/projects/proj1_4.PNG", "./assets-nova/img/projects/proj1_5.PNG"]
    },
    4: {
        "name": "Reglamentos de los laboratorios de Ciencias",
        "entity": "Universidad Nacional de Colombia",
        "main_img_path": "./assets-nova/img/projects/laboratorios.png",
        "challenge": "“Comunicar de manera clara, concisa y dinámica los reglamentos que deben atender quienes frecuentan los laboratorios de docencia de la Facultad de Ciencias en la UNAL.”",
        "solution": "Creamos recursos audiovisuales e interactivos que generan identidad y cuidado por medio de demostraciones reales, animaciones, efectos y actividades de valoración, en los que, además, se logra centrar el interés en el objetivo de las normas.",
        "img2_path": "",
        "video": "https://www.youtube.com/embed/c4tH__VqAuE",
        "more_img_slide": ["./assets-nova/img/projects/proj1_3.PNG", "./assets-nova/img/projects/proj1_4.PNG", "./assets-nova/img/projects/proj1_5.PNG"]
    },
    5: {
        "name": "Escuela Virtual de Seguridad Vial",
        "entity": "Agencia Nacional de Seguridad Vial",
        "main_img_path": "./assets-nova/img/projects/ANSV.png",
        "challenge": "“Enriquecer el programa de educación vial institucional a través de recursos educativos para los distintos actores viales y contextualizados a la diversidad geográfica, cultural y social del país.”",
        "solution": "Diseñamos y desarrollamos la plataforma web institucional y la Escuela Virtual de Seguridad Vial, integrada por recursos digitales de alta calidad y complejidad didáctica, dirigidos a los diversos actores viales del país: usuarios, autoridades y entidades territoriales.",
        "img2_path": "",
        "video": "https://www.youtube.com/embed/C7Kmx17tpJM",
        "more_img_slide": ["./assets-nova/img/projects/proj1_3.PNG", "./assets-nova/img/projects/proj1_4.PNG", "./assets-nova/img/projects/proj1_5.PNG"]
    },
    6: {
        "name": "Gestión del conocimiento pedagógico, tecnológico y organizacional en el marco del COVID-19",
        "entity": "Universidad Nacional de Colombia",
        "main_img_path": "./assets-nova/img/projects/c19.jpg",
        "challenge": "“Identificar lecciones en los dominios pedagógico, tecnológico y organizacional de la docencia, derivadas de la respuesta de la comunidad universitaria frente a la crisis causada por la covid-19.”",
        "solution": "Propusimos una estrategia de gestión del cambio, basada en investigación bibliográfica, análisis cuantitativo y cualitativo, que permitirá a la UNAL atender las necesidades académicas generadas por esta situación sanitaria.",
        "img2_path": "./assets-nova/img/projects/conocimiento_solucion.jpg",
        "video": "",
        "more_img_slide": ["./assets-nova/img/projects/proj1_3.PNG", "./assets-nova/img/projects/proj1_4.PNG", "./assets-nova/img/projects/proj1_5.PNG"]
    },
    7: {
        "name": "Escuela Corporativa",
        "entity": "Ministerio de Educación Nacional",
        "main_img_path": "./assets-nova/img/projects/escuela_corp.png",
        "challenge": "“Diseñar un programa de formación organizacional apoyado en tecnologías digitales e innovación pedagógica, con el que el MEN pueda contribuir a la consolidación de su cultura institucional.”",
        "solution": "Estructuramos la Escuela Corporativa del MEN, para lo cual diseñamos rutas de formación, recursos educativos digitales y objetos virtuales de aprendizaje que permiten al MEN orientar sobre temas como políticas, gestiones y estructuras del sistema educativo.",
        "img2_path": "./assets-nova/img/projects/escuela_solucion.jpg",
        "video": "",
        "more_img_slide": ["./assets-nova/img/projects/proj1_3.PNG", "./assets-nova/img/projects/proj1_4.PNG", "./assets-nova/img/projects/proj1_5.PNG"]
    },
    8: {
        "name": "Curso virtual de gestión de activos",
        "entity": "SGA Enel Codensa",
        "main_img_path": "./assets-nova/img/projects/activos.png",
        "challenge": "“Generar los recursos para capacitar al personal de Enel Codensa en la implementación de su sistema de gestión de bienes, infraestructura, derechos y talento humano.”",
        "solution": "Desarrollamos el Curso Virtual de Gestión de Activos Enel Codensa, en colaboración con el Grupo de Investigación en el Sector Energético Colombiano de la UNAL, que ha facilitado el aprendizaje de su personal técnico y profesional en un tema favorable para la prestación del servicio de energía en el país.",
        "img2_path": "./assets-nova/img/projects/enel_solucion.jpg",
        "video": "",
        "more_img_slide": ["./assets-nova/img/projects/proj1_3.PNG", "./assets-nova/img/projects/proj1_4.PNG", "./assets-nova/img/projects/proj1_5.PNG"]
    },
}
function setProjects() {
    var html = "";
    for (let i = 0; i < Object.keys(data).length; i++) {
        //ver proyecto, just in case
        //html += '<div class="my-3 project-item" href="#" onclick="hideList()" onmouseover="switchProjects(' + i + ')"><h1>' + data[i]["name"] + '</h1><h4>' + data[i]["entity"] + '</h4><p class="show-indicator">Ver Proyecto</p></div>';
        html += '<div class="my-3 project-item" href="#" onclick="hideList('+i+')" onmouseover="mouseOver(' + i + ')"><h1>' + data[i]["name"] + '</h1><h4>' + data[i]["entity"] + '</h4></div>';
    }
    $("#project-container").html(html);
}


function switchProjects(num) {
    //first slide elements
    $("#visible-image").css("background-image", "url(" + data[num]["main_img_path"] + ")");
    $("#challenge-text").html("<h1 style=\"color: white;\">" + data[num]["challenge"] + "</h1><p class=\"mt-5\" style=\"color: white;\">" + data[num]["entity"] + "</p>");

    //secon slide elements
    $("#how-text").html("<p style=\"color: white !important;\">" + data[num]["solution"] + "</p>");
    if(data[num]["video"]==undefined||data[num]["video"]==""||data[num]["video"]==null){
        $("#second-image").html("<img class='width-100' src='" + data[num]["img2_path"] + "'>");
    }else{
        $("#second-image").html(`<iframe width="100%" height="" class="video-iframe" src=""
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>`);
        document.getElementsByClassName("video-iframe")[0].src = data[num]["video"];
    }
    //third slide elements
    /*
    var galery = "";
    replaceImage(num, 0);
    for (let i = 0; i < data[num]["more_img_slide"].length; i++) {
        galery += "<div class=\"px-3 py-3 col-5 col-md-12\" onclick=\"replaceImage(" + num + "," + i + ")\"> <img class=\"width-100\"src=" + data[num]["more_img_slide"][i] + "></div>"
    }
    $("#list-of-images").html(galery);*/
}

function replaceImage(project, id) {
    $("#img-main-galery").html("<img class=\"width-100\" src='" + data[project]["more_img_slide"][id] + "'>");;
}

function mouseOver(id){
    if(value==1){
        return
    }else{
        switchProjects(id);
    }
}

function hideList(id) {
    value=1;
    switchProjects(id);
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
    value=0;
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
    $('#carousel .carousel-control-prev').addClass('d-none');
    $('#carousel .carousel-control-next').removeClass('d-none');
    setTimeout(function () {
        $('.unal-text').addClass('opacity-show');
        $('.unal-text').removeClass('opacity-hide');
    }, 700);
}


