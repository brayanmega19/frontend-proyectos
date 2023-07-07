const d = document,
w = window,
n = navigator;
export default function networkStatus() {

    const linea = () =>{
        const $div = d.createElement("div"),
        $header= d.querySelector("header");

        
        if(n.onLine){
            
            $div.textContent = "Conexion reestablecida";
            $div.classList.add("online");
            $div.classList.remove("offline");
        }else{
            
            $div.textContent = "Conexion perdida";
            $div.classList.add("offline");
            $div.classList.remove("online");
        }

        $header.insertAdjacentElement("afterbegin",$div);

        setTimeout(()=>{
            $header.removeChild($div);

        },2000);
    };
    
    w.addEventListener("online", (e) => linea());
    w.addEventListener("offline", (e) => linea());    

    
}