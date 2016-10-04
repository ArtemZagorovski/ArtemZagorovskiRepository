alert ("Введите два числа")
var a=prompt("a=")
a=a*1.0
var b=prompt("b=")
b=b*1.0

alert ("введите операцию(+,-,*,/)")
var op=prompt("op=")
switch (op){
case "+":alert(a+b);
break;
case "-":alert(a-b);
break;
case "*":alert(a*b);
break;
case "/":alert(a/b);
break;
}