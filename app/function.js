
// create data for todo apps

let createData = (key, data) => {

    let todos = [];

    // todasdata get for validation here
    if(localStorage.getItem(key)){
        todos = JSON.parse(localStorage.getItem(key));
    }

    // push data for empty array variable

    todos.push(data);

    // set data for ls 

    localStorage.setItem( key , JSON.stringify(todos));

}


// get all data 

const getAllData = (key) => {
    let data = localStorage.getItem(key);

    return JSON.parse(data);
}

// update data for LS
const updateData = (key, data) => {
   localStorage.setItem(key, JSON.stringify(data));
}




