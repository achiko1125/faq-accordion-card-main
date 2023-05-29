let questions=document.querySelectorAll(".question")
for(let i=0; i<questions.length;i++){
    questions[i].addEventListener("click",function(){
        if( questions[i].parentNode.classList.contains("active")){
            questions[i].parentNode.classList.remove("active")
        }
        else{
            for(let a=0; a<questions.length;a++){
                questions[a].parentNode.classList.remove("active")
            }
            questions[i].parentNode.classList.add("active")
        }
    })
}
