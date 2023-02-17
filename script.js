


let sum=0;
let list=[];

function AddItem(pizza, cost){
    let newItem = {
        Pizza:pizza,
        Cost:cost
    };
    list.push(newItem);
    sum+=cost;
}


function DisplayCart(){  //lazy way of displaying all employees

    list.forEach((l)=> {
        console.log(`Item: ${l.Pizza}  Cost: $${l.Cost}`);
       // sum+=cost;
    });
    console.log("Your total is: $"+sum)
}

function purge(){
    list.splice(0);
    sum=0;
}