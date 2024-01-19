let todo = [];

let req = prompt("please enter your request");

while(true){
    if(req == "quit"){
        console.log("quitting app");
        break;
    }

    if(req == "list"){
        console.log("This is the list of works you have to do");
        for(let i = 0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("------------------------------------------");
    }
    else if(req == "add"){
        let task = prompt("enter the task you want to add for you");
        todo.push(task);
        console.log("task added");
    }
    else if(req == "delete"){
        let idx = prompt("please enter the task index");
        todo.splice(idx,1);
        console.log("task deleted");
    }
    else{
        console.log("wrong request");
    }

   req = prompt("enter the request you want to enter");

}