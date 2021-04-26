$(window).on('scroll', function() {
    if ($(window).scrollTop() >= $('.div').offset().top + $('.div').outerHeight() - window.innerHeight) {
        
            for (let index = 0; index < 20; index++) {
                let h1 = document.createElement("h1");
                document.getElementById("div").appendChild(h1);
                h1.innerText= "this is another text";
                if (index == 9) {
                    h1.style.color = "rgb(10, 250, 226);";
                }
            }

    }
});