let string ="";
let button = document.getElementsByClassName("btn");
Array.from(button).forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        let input = document.querySelector('input');
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }
        else if (e.target.innerHTML == 'C') {
            string = "";
            input.value = string;
        }
        else{

            console.log(e.target);
            string = string + e.target.innerHTML;
            input.value = string;
        }
    })
})
