function lettercount2( string ) {  
    string = string.replaceAll(" ", "").toLowerCase();
    let obj = [];
    let al = "abcdefghijklmnopqrstuvwxyz";
    for(let i = 0; i < al.length; i++){
        let count = 0
        for(let a = 0; a < string.length; a++){
            if (al[i] == string[a]) count++
        }
        count > 0 ? obj.push({letter: al[i], occurence: count}) : ""
    }
    return obj
}