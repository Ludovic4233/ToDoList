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
    validate.innerHTML = "v";
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