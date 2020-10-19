//create map
const map = L.map('mapid').setView([-5.4956612,-47.4943441], 15);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})


let marker;

// create and add marker
map.on('click',(event) =>{

    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value =lat;
    document.querySelector('[name=lng]').value =lng;

    //remove icon
    marker && map.removeLayer(marker)

    // add icon layer 
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})

//add campos de fotos
function addPhotoField(){
    //pegar o container de fotos #images
    const container = document.querySelector('#images')
    //pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar o clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    
    //verificar se o campo esta vazio
    const input = newFieldContainer.children[0]
    if( input.value == ""){
        return
    }

    //limpar o campo antes de Adicionar ao container de imagens
    input.value = ""


    //adicionar o clone ao container de images
    container.appendChild(newFieldContainer)

}

function deleteField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2){
        //limpar o valor do campo
        span.parentNode.children[o].value = ""
        return
    }

    //deletar o campo
    span.parentNode.remove();

}

//select yes or no

function toggleSelect(event){

    // get o botao clicado

    

    //retirar a class .active dos botaos
    document.querySelectorAll('.button-select button')
    .forEach((button) => {button.classList.remove('active')})

    //coloar a class .active nesse botao clicado
    const button = event.currentTarget
    button.classList.add('active')

    // atualizar o meu input hidden  com o valor selecionado
    const input = document.querySelector('[name = "open_on_weekends"]')
    
    input.value = button.dataset.value

    
}

function validate (event){
    //validar se lat e lng estao preenchidos
    const needsLatAndLng = false;
    if(needsLatAndLng){
        event.preventDefault()
    alert('Selecione um ponto no mapa')
    }
    
}