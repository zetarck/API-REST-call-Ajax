const cargarPosts = document.querySelector('#cargar');

cargarPosts.addEventListener('click', cargarAPI);


function cargarAPI() {
    //Crear el objeto
    const xhr = new XMLHttpRequest;
    //Copiamos la URL de donde consumiremos la API. Abre la conexion
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
    //Carga y lee datos
    xhr.onload = function() {
        if (this.status === 200) {
           const respuesta = JSON.parse(this.responseText);
           let contenido = '';
           respuesta.forEach(function(post) {
               contenido += `
                    <h3>${post.title} </h3>
                    <p> ${post.body}</p>
               `;   
           });
            document.getElementById('listado').innerHTML = contenido;
        }
    }
    //Enviar la conexion
    xhr.send();
}

