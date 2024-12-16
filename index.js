
let exp = "";


let calBox = document.querySelector("#buttonfield");
for(let i =1 ; i<= 19;i++)
{
    let a = document.createElement("div");
    a.setAttribute("class","button");
    a.setAttribute("id",`b${i}`);
    switch(i)
    {
        case 1 : a.innerText = "AC";
        a.addEventListener('click',()=>{
   
            exp = "";
            document.querySelector("input").value = exp;
        })
        break;
        case 2 : a.innerText = "C";
        a.addEventListener('click',()=>{
   
            exp = exp.substring(0,exp.length-1);
            document.querySelector("input").value = exp;
        })
        break;
        case 3 : a.innerText = "%";
        
        break;
        case 4 : a.innerText = "/";
        break;
        case 5 : a.innerText = "7";
        break;
        case 6: a.innerText = "8";
        break;
        case 7 : a.innerText = "9";
        break;
        case 8 : a.innerText = "x";
        break;
        case 9 : a.innerText = "4";
        break;
        case 10 : a.innerText = "5";
        break;
        case 11: a.innerText = "6";
        break;
        case 12: a.innerText = "-";
        break;
        case 13 : a.innerText = "1";
        break;
        case 14: a.innerText = "2";
        break;
        case 15: a.innerText = "3";
        break;
        case 16: a.innerText = "+";
        break;
        case 17: a.innerText = "0";
        break;
        case 18: a.innerText = ".";
        break;
        case 19: a.innerText = "=";
        break;
        

    }
    calBox.append(a);
}
for(let i = 3 ; i <= 18 ; i++)
{
let a = document.getElementById(`b${i}`);
a.addEventListener('click', ()=>
{
    exp = document.querySelector("input").value;
    exp = exp + a.innerHTML;
    document.querySelector('input').value = exp;
})
}


document.querySelector("#b19").addEventListener('click' , () =>
{
    exp = document.querySelector("input").value;
    let res ="";
    for(let k of exp)
    {
        if(k == 'x')
            res = res+'*';
        else
        res = res + k;
    }
 const evaluate = new Function(`return ${res};`);//return aur $ ke beech space choddna compulsory hain
exp = evaluate();

console.log(exp);
if(isNaN(exp))
{
    document.querySelector("input").value = "error occured";
    exp;
}
else
{
    document.querySelector("input").value = exp;
}
})




