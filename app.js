// let data = [];


// function addInToTheList() {
//     let todoInput = document.getElementById("todoInput").value;
//     let pirioty = document.getElementById("pirioty").value;
//     data.push({
//         task: todoInput,
//         pirioty: pirioty
//     })
//     displayAllTheItems();
// }
// function displayAllTheItems() {
//     let list = document.getElementById("list")
//     list.innerHTML = "";
//     for (let i = 0; i < data.length; i++) {
//         list.innerHTML += `<li>
//         <b>Task</b>: ${data[i].task} <br/> <b>Pirioty</b>: ${data[i].pirioty}</li>`
//     }
// }
let data = []
function addInToTheList() {
    let todoInput = document.getElementById("todoInput").value
    let pirioty = document.getElementById("pirioty").value
    data.push({
        Task: todoInput,
        Pirioty: pirioty
    }
    )
    displayItem()
}
function displayItem() {
    let list = document.getElementById('list')
    list.innerHTML = ""
    for (let i = 0; i < data.length; i++) {
    list.innerHTML+=`<li>
    <b>Task:</b>${data[i].Task}<br/><b>Pirioty:</b>${data[i].Pirioty}</li>`
    }
}