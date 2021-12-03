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

//2ci taskı birçox üsul ilə yoxlamağıma baxmayaraq həll edə bilmədim