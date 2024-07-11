sum= (a,b) =>{
    console.log(`Sum of ${a} and ${b} is ${a+b}`)
}

sub= (a,b) =>{
    console.log(`Sum of ${a} and ${b} is ${a-b}`)
}
mul= (a,b) =>{
    console.log(`Sum of ${a} and ${b} is ${a*b}`)
}
div= (a,b) =>{
    console.log(`Sum of ${a} and ${b} is ${a/b}`)
}
function calculator (a,b, callbackfunction1,callbackfunction2,callbackfunction3,callbackfunction4)
{
    callbackfunction1(a,b);
    callbackfunction2(a,b);
    callbackfunction3(a,b);
    callbackfunction4(a,b);
}
calculator(4,2,sum,sub,mul,div);