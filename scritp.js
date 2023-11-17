let contenedor = document.querySelector('#contenedor')



axios.get('https://leonardoapi.onrender.com/music')
    .then( (res) => { // Se reciben los datos del servidor

        
        res.data.map( (song) => { // Se mapean las canciones

            // Creo el componente
            let div = document.createElement('div')
            div.classList.add('musica')//clase para los estilos
            div.addEventListener("clip",() => {
                console.log("se hace un click")
                document.querySelector('#current-song-title').innerHTML = song.title
                document.querySelector('#current-song-author').innerHTML = song.author
                
             })

            // Agrego el contendio al componente
            div.innerHTML += `
            <img class="album" src="${song.path.front}" alt="">
            <div>
                <h2 class="cancion">${song.title}</h2>
                <p class="autores">${song.author}</p>
            </div>
            `

            div.addEventListener( 'click', () => {

                // Clase siguiente ponemos a reproducir la cancion aquí
                document.querySelector('#audio').setAttribute('src', song.path.audio)
                document.querySelector('#title').innerHTML = song.title
            } )

            // Agrego el componente al contenedor
            contenedor.appendChild(div)
        
        } )
        

    } )