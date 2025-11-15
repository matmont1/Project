function toggleMode(){
    const html = document.documentElement
     // if(html.classList.contains("light")){
     //  html.classList.remove("light")  
     //}else{
     //  html.classList.add("light")
     // }
     html.classList.toggle("light")
     
     //take the tag img 
     const img = document.querySelector('#profile img')

     //if light mode, add avatar light
     if(html.classList.contains("light")){
        img.setAttribute('src', './assets/avatar-light.png')
        img.setAttribute('alt', "Foto de Matheus na praia, com oculos de sol, com a camiseta da seleção brasileira, rumo ao hexa")
     //else, keep dark image
     } else {
        img.setAttribute('src', './assets/avatar.png')
        img.setAttribute('alt', 'Foto de Matheus, sorrindo, com luz de fundo azul')

     }
}

