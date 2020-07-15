var latitude;
var longitude;

String.prototype.replaceAll = function(de, para){
    let str = this;
    let pos = str.indexOf(de);
    while (pos > -1){
		str = str.replace(de, para);
		pos = str.indexOf(de);
	}
    return (str);
}

function trocaEspacos(address){
    let newAddress;
    if(address.indexOf(" ") > -1) newAddress = address.replaceAll(" ", "+"); 
    return newAddress;
}

function geocode(){
    var location = trocaEspacos($("#address").val());
    axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
        params:{
            address: location,
            key:'AIzaSyDC8F4Qkbn2_F0RDhd1Inhzx5w_PXwbkYg'
        }
    }).then(function(response){
        console.log(response);
        latitude = response.data.results[0].geometry.location.lat;
        longitude = response.data.results[0].geometry.location.lng;
    }).catch(function(error) { 
        console.log(error);
    })
}
