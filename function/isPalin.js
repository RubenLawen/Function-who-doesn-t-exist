function isPalin(str) {  
    if(str.split(" ").length > 1){
        return false
    } else{
        let newWord = ''
        for(i = str.length-1; i >= 0; i--){
            newWord += str[i]
        }
        if (newWord == word) return true
        else return false
    }
}