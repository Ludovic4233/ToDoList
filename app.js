let add = document.querySelector('.add');
let list = document.querySelector('.list');
let input = document.querySelector('input');

add.addEventListener('click', function(){
    let li = document.createElement('li');
    let remove = document.createElement('button');
    let validate = document.createElement('button');

    remove.classList.add('rmv');
    validate.classList.add('vld');

    remove.innerHTML = "×";
    remove.style.fontSize = "40px";
    remove.style.marginLeft = "40px";
    remove.style.paddingLeft = "10px";
    remove.style.paddingRight = "10px";

    validate.innerHTML = "v";
    validate.style.fontSize = "40px";
    validate.style.marginLeft = "40px";
    validate.style.paddingLeft = "10px";
    validate.style.paddingRight = "10px";


    list.appendChild(li);

    
    li.innerHTML = input.value+" ";
    input.value = "";
    li.appendChild(validate)
    li.appendChild(remove);


    
    remove.addEventListener('click', function(){
        li.remove();
    })

    validate.addEventListener('click', function(){
        if(validate.style.backgroundColor === "rgb(0, 234, 0)"){
            validate.style.backgroundColor = "white";
        }else{
            validate.style.backgroundColor = "rgb(0, 234, 0)";
        }
        
    })
})