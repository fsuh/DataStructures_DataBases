//Given a string with three types of brackets: (), {}, and [].
// Validate they are correctly closed and opened.

function isParenthesesValid(string) {
    // create a stack
    let stack = [];
    // loop through each element in the string
    for (i = 0; i < string.length; i++){
        let char = stack[stack.length -1]
        // if you encounter a starting bracket, push it into the stack
        if(string[i] == "(" || string[i] =="{" || string[i] =="["){
            stack.push(string[i])
            // Pop the opening bracket off the stack,
            // if there is a corresponding closing bracket in the string
        } else if((char == "(" && string[i] == ")") ||
        (char == "{" && string[i] == "}") ||
        (char == "[" && string[i] == "]")){
            stack.pop()
        } else return false
    }
    // check empty stack
    return stack.length ? false: true
}


console.log(isParenthesesValid('(){}[]')); // true
console.log(isParenthesesValid('(')); // false (closing parentheses is missing)
console.log (isParenthesesValid('([{}])')); // true
console.log (isParenthesesValid('[{]}')); // false (brackets are not closed in the right order)
console.log(isParenthesesValid('([{)}]')); // false (closing is out of order)



const isParenthesesValid2 = (string) =>{
    // Create a hash
    let map = {
        ")": "(",
        "}":"{",
        "]":"["
    }
    // create a stack
    let stack = [];
    // loop through each element in the string
    for (i = 0; i < string.length; i++){
        // if you encounter a starting bracket, push it into the stack
        if(string[i] == "(" || string[i] =="{" || string[i] =="["){
            stack.push(string[i])
            // Pop the opening bracket off the stack,
            // if there is a corresponding closing bracket in the string
        } else if(stack[stack.length -1] === map[string[i]]){
            stack.pop()
        } else return false
    }
    // check empty stack
    return stack.length ? false: true
    
}

console.log('xxxxxxxxxxxxxxxxxxxxxxx')

console.log(isParenthesesValid2('(){}[]')); // true
console.log(isParenthesesValid2('(')); // false (closing parentheses is missing)
console.log (isParenthesesValid2('([{}])')); // true
console.log (isParenthesesValid2('[{]}')); // false (brackets are not closed in the right order)
console.log(isParenthesesValid2('([{)}]')); // false (closing is out of order)