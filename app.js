let $map = document.querySelector('#map')






//-------------------------
class LeafletMap{
    constructor(){
        this.map = null 
        this.bounds = []
    }
    async load(element) {
        return new Promise ((resolve, reject) =>{
            this.map = L.map(element)/*.setView([48.860, 2.330], 19);*/
                L.tileLayer('//api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                    tileSize: 512,
                    maxZoom: 18,
                    zoomOffset: -1,
                    id: 'mapbox/streets-v11',
                        accessToken:'pk.eyJ1IjoiY2hhZG9lcyIsImEiOiJjbDUyNWUycDEwY2ViM2pyeXV4MGZsMDB0In0.A2BoQu-VMaVKsRCwnbXCrA',
                        attribution: '© OpenStreetMap'
                    }).addTo(this.map)
                    resolve()
            
        })
    }

//----->>-----
addMarker (lat, lng, text){
    let point = [lat, lng]
    this.bounds.push(point)
return new LeafletMarker(point, text, this.map)
}

center (){
    this.map.fitBounds(this.bounds)
}

//----->>-----

}
//---------------------------------------------------





class LeafletMarker{
    constructor(point, text, map){
        this.text = text
        this.popup = L.popup({
            autoClose: false,
            closeOnEscapeKet: false,
            closeOnClick: false,
            closeButton: false,
            className: 'marker',
            maxWidth: 400
        })
        .setLatLng(point)
        .setContent(text)
        .openOn(map)
    }


setActive(){
this.popup.getElement().classList.add('is-active')
}

unsetActive(){
    this.popup.getElement().classList.remove('is-active')
}

addEventListener(event, cb){
    this.popup.addEventListener('add', () =>{
        this.popup.getElement().addEventListener(event, cb)
    })
}

setContent(text) {
    this.popup.setContent(text)
    this.popup.getElement().classList.add('is-expended')
    this.popup.update()
}

resetContent(){
    this.popup.setContent(this.text)
    this.popup.getElement().classList.remove('is-expended')
    this.popup.update()
}

}


const initMap = async function () {
    let map = new LeafletMap()
    let hoverMarker = null
    let activeMarker = null
    await map.load($map)
    Array.from(document.querySelectorAll('.js-marker')).forEach((item) => {
    let marker = map.addMarker(item.dataset.lat, item.dataset.lng, item.dataset.price + ' €')
    item.addEventListener('mouseover', function(){
        if(hoverMarker !== null){
            hoverMarker.unsetActive()
        }
        marker.setActive()
        hoverMarker = marker
    })
    item.addEventListener('mouseleave', function(){
        if (hoverMarker !== null){
            hoverMarker.unsetActive()
        }
    })
    marker.addEventListener('click', function(){
        if (activeMarker !== null){
            activeMarker.resetContent()
        }
        marker.setContent(item.innerHTML)
        activeMarker = marker
    })
    })
    map.center()
}

        if ($map !== null){
            initMap()
        }
    
        
