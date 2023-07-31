const buttonClickHere = document.querySelector(".todos .create-new-todo button");

// get data for input tag
const inputClickHere = document.querySelector(".todos .create-new-todo input");

// push data for ul tag for innerHTML method using here 
const todoLists = document.querySelector(".todos ul");



// showData function creation for show and push database 

const showData = () => {

    let todos = [];

    if(localStorage.getItem("todos")){
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    let content = '';
    
    todos.reverse().map((item, index) => {
        content += `<li><p><i class="fa-solid fa-check"></i> ${item}</p> <button onclick="deleteData('${item}')"><i class="fa-solid fa-trash"></i></button></li>`;
    });

    // push data for ul tag for innerHTML
    todoLists.innerHTML = content;

}

   
    buttonClickHere.onclick = () => {

       const data = buttonClickHere.previousElementSibling.value;

 
       
       if(data){

        // create data for fucntion

        createData("todos", data);
       
       buttonClickHere.previousElementSibling.value = '';
       }else{
        alert("Plz Filed Must Be Empty ?")
       }

    // sent data to local storage here now

   

       showData();
    }


    // create a function for delete single item for database 

    function deleteData(item){

        const todos = getAllData("todos");
        
        const updatedata = todos.filter((data) => data != item );

      
        // delete data form LS 
        
        updateData("todos", updatedata);

        showData();
    }


showData();

