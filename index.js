var input1=document.getElementById("input1");
var from=document.getElementById("options");
var to =document.getElementById("options2");
var convert=document.getElementById("btn2");
var input2=document.getElementById("input2");
var swapBtn=document.getElementById("btn1");
convert.addEventListener('click', ()=>{
    if(!input1.value){
        alert("Please enter the number");
    }
    else if(from.value==to.value){
        alert("Please choose the different type");
    }
    else if(from.value=='Decimal' && to.value=='Binary'){
        let number = parseInt(input1.value);
        let result = number.toString(2);
        input2.value= result;
    }
    else if(from.value=='Decimal' && to.value=='Octal'){
        let number = parseInt(input1.value);
        let result = number.toString(8);
        input2.value= result;
    }
    else if(from.value=='Decimal' && to.value=='Hexadecimal'){
        let number = parseInt(input1.value);
        let result = number.toString(16);
        input2.value= result;
    }
    else if(from.value=='Binary' && to.value=='Decimal'){
        let number = parseInt(input1.value, 2);
         input2.value= number;
    }
    else if(from.value=='Binary' && to.value=='Octal'){
        let number=parseInt(input1.value, 2);
        let result=number.toString(8);
        input2.value=result;
    }
    else if(from.value=='Binary' && to.value=='Hexadecimal'){
        let number=parseInt(input1.value, 2);
        let result=number.toString(16);
        input2.value=result;
    }
    else if(from.value=='Octal' && to.value=='Binary'){
        let number=parseInt(input1.value, 8);
        let result=number.toString(2);
        input2.value=result;
    }
    else if(from.value=='Octal' && to.value=='Decimal'){
        let number=parseInt(input1.value, 8);
        let result=number.toString(10);
        input2.value=result;
    }
    else if(from.value=='Octal' && to.value=='Hexadecimal'){
        let number=parseInt(input1.value, 8);
        let result=number.toString(16);
        input2.value=result;
    }
    else if(from.value=='Hexadecimal' && to.value=='Binary'){
        let number=parseInt(input1.value, 16);
        let result=number.toString(2);
        input2.value=result;
    } 
    else if(from.value=='Hexadecimal' && to.value=='Decimal'){
        let number=parseInt(input1.value, 16);
        let result=number.toString(10);
        input2.value=result;
    } 
    else if(from.value=='Hexadecimal' && to.value=='Octal'){
        let number=parseInt(input1.value, 16);
        let result=number.toString(8);
        input2.value=result;
    } 
});

swapBtn.addEventListener('click', ()=>{
    let swap1=from.value;
    let swap2=to.value;
    from.value=swap2;
    to.value=swap1;
});

function clr(){
    input1.value="";
    input2.value="";
}