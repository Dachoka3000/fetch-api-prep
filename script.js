function getData(){
    fetch("https://jsonplaceholder.typicode.com/teddybears")
    .then(function(response){ return response.json()})
    .then(data=>displayData(data))
    .catch(function(error){console.log(error)})
}
getData()

function displayData(todos){
    for(todo of todos ){
        let p = document.createElement("p")
        p.innerText=todo.title
        document.body.append(p)
    }
}