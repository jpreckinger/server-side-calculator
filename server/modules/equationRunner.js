function equationRunner(equation){
    let num1 = equation.num1;
    let num2 = equation.num2;
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