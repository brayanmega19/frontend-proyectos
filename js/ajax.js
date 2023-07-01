(()=>{
    const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

    // console.log(xhr);

    xhr.addEventListener("readystatechange", (e)=>{
        if(xhr.readyState !== 4) return;
        // console.log(xhr);
        if(xhr.status >= 200 && xhr.status < 300){
            // console.log("exito");
            let json = JSON.parse(xhr.responseText);
            // console.log(json);

            json.forEach((el)=>{
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $xhr.appendChild($fragment);
        }else{
            // console.log("error");
            let message = xhr.statusText || "Ocurrio un error";
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
        }
        // console.log("Este if se ejecuta de todas formas");
    });

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

    xhr.send();
})();

(()=>{
    
    $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => (res.ok? res.json() : Promise.reject(res)))
    .then(json=>{
        // console.log(json);
        json.forEach(e =>{
            $li = document.createElement("li");
            $li.innerHTML = ` ${e.id} --${e.name} -- ${e.email}`;
            $fragment.appendChild($li);
        });
        $fetch.appendChild($fragment);
    })
    .catch((err) =>{
        // console.log(`Estamos en el catch:   ${err}`);
        let message = err.statusText || "Ocurrio un error";
        $fetch.innerHTML = `Error ${err.status}: ${message}`;  
    }).finally(()=>{
        // console.log("Esto se ejecutara independientemente");
    });

})();

(()=>{
    $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();

    async function getData(){
        try{
            console.log($fetchAsync);
            let res = await fetch("https://jsonplaceholder.typicode.com/users"),
            json =  await res.json();

            if(!res.ok) throw {status: res.status, statusText: res.statusText};

            json.forEach(e =>{
                const $li = document.createElement("li");
                $li.innerHTML = `${e.id} --${e.name} -- ${e.email}`;
                $fragment.appendChild($li);
            });
           
        
            $fetchAsync.appendChild($fragment);

        }catch(err){
            console.log(err);
            let message = err.statusText || "Ocurrio un error";
            $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;   

        }finally{

        }
        
    }
    getData();
})();

