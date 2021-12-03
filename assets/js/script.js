function ReverseString(str) {
  
    if(!str || str.length < 2 || 
            typeof str!== 'string') {
        return 'Not valid'; 
    }
      
    let revArray = [];
      
    for(let i = str.length - 1; i >= 0; i--) {
        revArray.push(str[i]);
    }
      
    return revArray.join(''); 
}
  
console.log(ReverseString("code academy"))

class CustomMatch {
    constructor(numberr) {
        this.numberr = numberr;
    }
    plus = function (plus) {
        this.numberr += plus;
        return this;
    }
    minus = function (minus) {
        this.numberr-= minus;
        return this;
    }
    multiply = function (multiply) {
        this.numberr *= multiply;
        return this;
    }
    divide = function (divide) {
        this.numberr /= divide;
        return this.numberr;
    }
}

var result = new CustomMatch(50).plus(6).minus(30).multiply(3).divide(2);

console.log(result);