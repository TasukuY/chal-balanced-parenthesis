// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:

let has_balanced_parens = word => {
    let openParensCounter = 0;
    let closeParensCounter = 0;

    for(let i = 0; i < word.length; i++){
        if(word[i] === '('){
            openParensCounter++;
        }else if(word[i] === ')'){
            closeParensCounter++;
        }
    }
    return openParensCounter === closeParensCounter;
}

console.log(has_balanced_parens(sample4));