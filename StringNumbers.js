
/*
Input : "twoplussevenminussixplussevenseven" (2+7-6+77)
Output: "eightzero" (80)
*/

function calculate(str){
    const map = {
        zero: 0,one: 1, two: 2, three: 3,four: 4,five: 5,six: 6,seven: 7,eight: 8,nine: 9,plus: '+',minus: '-'
    }
    const mapInv = {
        0:"zero",
        1:"one", 
        2:"two", 
        3:"three",
        4:"four",
        5:"five",
        6:"six", 
        7:"seven",
        8:"eight",
        "9":"nine",
    }

    Object.keys(map).forEach(symbol => {
       str = str.replaceAll(symbol,map[symbol])
    });

    let sum = 0
    let result = 0
    console.log(str)
    const numPlus = str.split('+')
    for(let i = 0; i < numPlus.length;i++){
        numPlus[i] = numPlus[i].split('-')
        if(numPlus[i].length > 1){
            sum = numPlus[i][0]  
            for(let j = 1; j < numPlus[i].length;j++){
                sum -= parseInt(numPlus[i][j])
            }
            numPlus[i] = [sum]
        }
        result += parseInt(numPlus[i])
    }
    
    let resultString = result<0?"negative"+result.toString():result.toString() ;
    resultString = resultString.replace('-','')

    Object.keys(mapInv).forEach(element => {
         resultString = resultString.replaceAll(element,mapInv[element])
     });
   

    return resultString;
}

var input = "twoplussevenminussixplussevenseven";

console.log(calculate(input))