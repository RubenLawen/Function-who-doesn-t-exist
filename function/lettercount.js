function lettercount( string ) {
    let arr = [];
    let compteur = 0;
    string = string.replace(" ", "").toLowerCase();
    for(let i = 0; i < string.length; i++){
        if(!arr.includes(string[i])){
            compteur++
            arr.push(string[i])
        }
    }
    return compteur
}
