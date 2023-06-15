const d = document

export default function draw(btn, selector){
    const getWinner = (selector)=>{
        const $players = d.querySelectorAll(selector),
        random = Math.floor(Math.random()*$players.length),
        winner = $players[random];
        
        // console.log(winner);
        // const $picking = d.querySelector(".card figcaption");
        // console.log("This is",$picking.textContent);
        return `El ganador es: ${winner.textContent}`
        
    };

    d.addEventListener("click", e=>{

        if(e.target.matches(btn)){
            let result = getWinner(selector);
            alert(result);
            console.log(result);
        }
    });

    
}