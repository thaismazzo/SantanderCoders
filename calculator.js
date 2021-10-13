function operacao(num1,operador,num2){
    let totals = []
    totals.push({num1: num1, operador: operador, num2: num2})        
    if(operador==='+'){        
     return [totals, num1+num2]} else if(operador==="-"){          
     return [totals, num1-num2]}
     else if(operador==="*"){
     return [totals,num1*num2]}
     else {return [totals, num1/num2]}}