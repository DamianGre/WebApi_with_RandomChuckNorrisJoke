window.onload = function(){          
    fetch("https://api.chucknorris.io/jokes/random")
    .then(respone => respone.json())
    .then(data => dataReady(data));            
}        
function dataReady(data){            
    document.getElementById("joke").innerHTML = data.value;
}

document.getElementById("refreshPage").addEventListener('click', function(){
    window.location.reload()
});
