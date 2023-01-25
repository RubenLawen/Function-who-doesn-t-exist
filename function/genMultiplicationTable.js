function genMultiplicationTable(num) {  
    num = parseInt(num);
    if(isNaN(num)){
        return false
    } else{
        let table = "";
        for(let i = 1; i < 11; i++){
            table+= `${i} * ${num} = ${num*i} \n`
        }
        return table
    }
}