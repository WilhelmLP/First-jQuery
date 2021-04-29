$(document).ready(function (){

    //** Selector, método para slider y el objeto json que muestra caracteristicas
    if(window.location.href.indexOf('index')>-1){
        $(".galeria").bxSlider({
            mode: 'fade', // El tipo de animación para las transisiónes
            captions: false, // Que se muestre caption o no
            slideWidth: 1200, // Tamaño de la foto a visualizar
            responsive: true
            // pager: false // Se quitan los puntos del slider
        });
    }

    //** Posts
    var posts = [
        {
            title: "Prubeba de titulo 1",
            date: "Publicado el día" + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor fermentum lectus quis pretium. Mauris nec elit urna. Donec in rhoncus eros, nec pulvinar nisl. Etiam sit amet lorem malesuada, ullamcorper ex sed, sodales nulla. Vestibulum eget nunc nec ante faucibus efficitur. Morbi urna neque, porttitor porttitor odio sed, finibus fermentum quam. Suspendisse arcu ex, bibendum nec arcu interdum, porta vehicula nisl. Maecenas et tempor metus. Mauris sit amet finibus erat. Sed finibus, lorem eget aliquet accumsan, tellus tellus placerat velit, posuere elementum sapien nulla in ex.'
        },
        {
            title: "Prubeba de titulo 2",
            date: "Publicado el día" + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor fermentum lectus quis pretium. Mauris nec elit urna. Donec in rhoncus eros, nec pulvinar nisl. Etiam sit amet lorem malesuada, ullamcorper ex sed, sodales nulla. Vestibulum eget nunc nec ante faucibus efficitur. Morbi urna neque, porttitor porttitor odio sed, finibus fermentum quam. Suspendisse arcu ex, bibendum nec arcu interdum, porta vehicula nisl. Maecenas et tempor metus. Mauris sit amet finibus erat. Sed finibus, lorem eget aliquet accumsan, tellus tellus placerat velit, posuere elementum sapien nulla in ex.'
        },
        {
            title: "Prubeba de titulo 3",
            date: "Publicado el día" + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor fermentum lectus quis pretium. Mauris nec elit urna. Donec in rhoncus eros, nec pulvinar nisl. Etiam sit amet lorem malesuada, ullamcorper ex sed, sodales nulla. Vestibulum eget nunc nec ante faucibus efficitur. Morbi urna neque, porttitor porttitor odio sed, finibus fermentum quam. Suspendisse arcu ex, bibendum nec arcu interdum, porta vehicula nisl. Maecenas et tempor metus. Mauris sit amet finibus erat. Sed finibus, lorem eget aliquet accumsan, tellus tellus placerat velit, posuere elementum sapien nulla in ex.'
        },
        {
            title: "Prubeba de titulo 4",
            date: "Publicado el día" + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor fermentum lectus quis pretium. Mauris nec elit urna. Donec in rhoncus eros, nec pulvinar nisl. Etiam sit amet lorem malesuada, ullamcorper ex sed, sodales nulla. Vestibulum eget nunc nec ante faucibus efficitur. Morbi urna neque, porttitor porttitor odio sed, finibus fermentum quam. Suspendisse arcu ex, bibendum nec arcu interdum, porta vehicula nisl. Maecenas et tempor metus. Mauris sit amet finibus erat. Sed finibus, lorem eget aliquet accumsan, tellus tellus placerat velit, posuere elementum sapien nulla in ex.'
        },
        {
            title: "Prubeba de titulo 5",
            date: "Publicado el día" + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor fermentum lectus quis pretium. Mauris nec elit urna. Donec in rhoncus eros, nec pulvinar nisl. Etiam sit amet lorem malesuada, ullamcorper ex sed, sodales nulla. Vestibulum eget nunc nec ante faucibus efficitur. Morbi urna neque, porttitor porttitor odio sed, finibus fermentum quam. Suspendisse arcu ex, bibendum nec arcu interdum, porta vehicula nisl. Maecenas et tempor metus. Mauris sit amet finibus erat. Sed finibus, lorem eget aliquet accumsan, tellus tellus placerat velit, posuere elementum sapien nulla in ex.'
        }
    ];  

    posts.forEach((item, index) => {
        var post = `
            <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>
                    ${item.content}
                </p>
                <a href="#" class="button-more">Leer más</a>
            </article>
        `;

        $("#posts").append(post);
    });


    //**Selector de Tema
    var theme = $("#theme");

    $("#to-green").click(function(){
        theme.attr("href", "css/green.css");
    });

    $("#to-red").click(function(){
        theme.attr("href", "css/red.css");
    });

    $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css");
    });

    //**Scroll arriba de la Web
    $(".subir").click(function(){
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 10000);

        return false;
    });

    //** Login con guardado en localstorage. Se inicia sesión, se muestra el nombre de usuario por pantalla y se puede cerrar sesión. Al cerrar sesión, la página recarga */

    $("#login form").submit(function(){
        var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);
    });

    var form_name = localStorage.getItem("form_name");

    if(form_name != null && form_name != "undefined"){
        var about_parrafo = $("#about p");

        about_parrafo.html("<br><strong> Bienvenido, " + form_name + "</strong>");
        about_parrafo.append("<a href='#' id='logout'>Cerrar Sesión</a>");

        $("#login").hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
    }

    //** Acordeon de información
    if(window.location.href.indexOf('about')>-1){
        $("#acordeon").accordion();
    }

    //** Reloj
    if(window.location.href.indexOf('reloj')>-1){

        setInterval(function(){
            var reloj = moment().format('h:mm:ss');
            $("#reloj").html(reloj);
        }, 1000);
    }

    //** Validación 
    if(window.location.href.indexOf('contact')>-1){

        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });

        $.validate({
            lang: 'es',
            /* errorMessagePosition: 'top',
            scrollToTopOnError: true */
        });
    }

});