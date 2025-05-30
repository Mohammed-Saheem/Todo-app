let todo=[];

// let req=prompt("Enter your Request");

while(true){
    if(req=='quit'){
        console.log("the todo opertion is quitted");
        break;
    }
    if(req=='list'){
        console.log("---------------------------")
        for(add in todo){
            console.log(todo[add])
        
        }
        console.log("---------------------------")
        req=prompt("Enter your Request");   

    }
    if(req=='add'){
        
        let add=prompt("Enter the task be added in todo");
        todo.push(add);
        console.log("task addded");
        req=prompt("Enter your Request");
    }
    else if(req=='delete'){
        let idx=prompt("please enter the tsk index");
        todo.splice(idx,1);
req=prompt("Enter your Request");    }
}   