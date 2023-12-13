const reverse = (string) => {
    const newString = []; 
    for(let i = 0; i < string.length; i++) {
        newString.unshift(string[i]);
    }
    return newString.join("")
}

export { reverse }