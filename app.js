$('#boutton0').click(function(){
        console.log('0');
});
$('#boutton1').click(function(){
        console.log('1');
});
$('#boutton2').click(function(){
        console.log('2');
});
$('#boutton3').click(function(){
        console.log('3');
});
$('#boutton4').click(function(){
        console.log('4');
});
$('#boutton5').click(function(){
        console.log('5');
});
$('#boutton6').click(function(){
        console.log('6');
});
$('#boutton7').click(function(){
        console.log('7');
});
$('#boutton8').click(function(){
        console.log('8');
});
$('#boutton9').click(function(){
        console.log('9');
});
$('#boutton10').click(function(){
        console.log('+');
});
$('#boutton11').click(function(){
        console.log('-');
});
$('#boutton12').click(function(){
        console.log('*');
});
$('#boutton13').click(function(){
        console.log('/');
});
$('#boutton14').click(function(){
        console.log('=');
});

function add(a, b) {
        return a + b;
}
function substract(a,b) {
        return a - b;
}
function multiply(a,b) {
        return a * b;
}
function divide(a,b) {
        return a / b;
}

function calc()
{
        var operation =        

        if(operation === 'add')
        {
                console.log(add(a,b));
        }
        else if(operation === 'substract')
        {
                console.log(substract(a,b));

        }
        else if(operation === 'divide')
        {
                console.log(divide(a,b));
        }

}

calc();