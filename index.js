// Add your code here
function submitData(name, email){

const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify({
    name,
    email
})
}
return fetch("http://localhost:3000/users", configurationObject)
.then(function (response){
    return response.json();
})
.then(function (object){
    document.body.innerHTML = object["id"]
    
})
.catch(error => {
    const body = document.querySelector('body');
    const p = document.createElement('p');
    p.textContent = error.message;
    body.append(p)
});
}


