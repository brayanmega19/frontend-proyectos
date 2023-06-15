const d = document;

export default function searchFilters(input, selector){
    d.addEventListener("keyup", (e)=>{

        if(e.target.matches(input)){
            if(e.key === "Escape") e.target.value = "";
            
            console.log("Este",e.target.value);
            console.log(e);

            d.querySelectorAll(selector).forEach((el)=>{
                let lowerValue = (e.target.value).toLowerCase()
                el.textContent.toLowerCase().includes(lowerValue)?
                el.classList.remove("filter"):
                el.classList.add("filter");
            });
        }
    });
}