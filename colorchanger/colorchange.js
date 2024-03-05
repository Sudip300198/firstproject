const Changer = document.querySelectorAll('.Color');

const bodyColor = document.querySelector('body')

Changer.forEach(function (Color){
    Color.addEventListener("click", function(C){
        if(C.target.id === 'blue'){
            bodyColor.style.backgroundColor= C.target.id;
        };
        if(C.target.id === 'red'){
            bodyColor.style.backgroundColor= C.target.id;
        };
        if(C.target.id === 'grey'){
            bodyColor.style.backgroundColor= C.target.id;
        };
        if(C.target.id === 'yellow'){
            bodyColor.style.backgroundColor= C.target.id;
        };

    });
});