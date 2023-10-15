// Code your solutions in this file

const gifts= ["teddy bear", "drone", "doll"];

const nameList = []


function namesArray(name){
    debugger;
    return nameList.push(name);

}


function writeCards(nameList,event){

    for ( let i = 0; i < nameList.length; i++){
        nameList[i]  = `Thank you, ${nameList[i]}, for the wonderful ${event} gift!`;
    }
    return nameList;

}

writeCards();

console.log(nameList)


 function countDown(number){
    let count = 0;
    while (count <= number){
        console.log(count++);
    }
    return count;
 }

 countDown(10);