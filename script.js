const accordions=document.querySelectorAll(".accordion");

accordions.forEach((acco)=>{
    const icon=acco.querySelector(".icon");
    const answer=acco.querySelector(".answer");
    icon.addEventListener("click",()=>{
        if(icon.classList.contains("active")){
            icon.classList.remove("active");
            answer.style.maxHeight=null;
        }else{
            icon.classList.add("active");
            answer.style.maxHeight=answer.scrollHeight +"px";
        }
    })
})