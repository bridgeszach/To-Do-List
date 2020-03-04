function addToDo() {
    //read the input
    // var text = document.getElementById('txtTask').value;
    var text = $('#txtTask').val();
    var x = 0;
    if (text != "") {
        $('#txtTask').val("");



        //creat string (HTML)
        var li = `<li id="${x}">${text} <button onclick = "deleteToDo('${x}');">-</button></li>`;

        //display the todo
        $('#pendingList').append(li);

        //set focus to the input
        $('#txtTask').focus();
    } else if (text === "") {
        alert("Please enter a task!");
    }

}

function deleteToDo(id) {
    $('#' + id).remove();
}


function init() {
    console.log("Init the to do App");
    $('#addBtn').click(addToDo);
}

window.onload = init;