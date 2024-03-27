function countAmazingSubstrings(S) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    
    for (let i = 0; i < S.length; i++) {
        if (vowels.includes(S[i])) {
            count += S.length - i;
            
             }
    }
    return count % 10003;
}


console.log(countAmazingSubstrings("ABeC"));


