function equationRunner(equation){
    let num1 = parseFloat(equation.num1);
    let num2 = parseFloat(equation.num2);
    console.log(num1 + ' ' + num2);
    let operator = equation.operator;
     if ( operator == '+' ){
        let answer = num1 + num2;
        return answer;
    } else if (operator == '-') {
        let answer = num1 - num2;
        return answer;
    } else if ( operator == '*' ) {
        let answer = num1 * num2;
        return answer;
    } else if ( operator == '/' ) {
        let answer = num1 / num2;
        return answer;
     }
}

module.exports = equationRunner;