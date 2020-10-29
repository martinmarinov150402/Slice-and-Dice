const elements=5;
let parag1 = new Array(elements);
let parag2 = new Array(elements);
let dots=new Array();
let curidx=0;
let par1;
let par2;
function getDots()
{
    dots.push(document.getElementById("dot1"));
    dots.push(document.getElementById("dot2"));
    dots.push(document.getElementById("dot3"));
    dots.push(document.getElementById("dot4"));
    dots.push(document.getElementById("dot5"));
    dots[curidx].style.fontSize = "50pt"; 
}
function initialize()
{
    par1=document.getElementById("para1");
    par2=document.getElementById("para2");
}
function removeClasses()
{
    par1.classList.remove("animRight");
    par2.classList.remove("animRight");
    par1.classList.remove("animLeft");
    par2.classList.remove("animLeft");
}
function changeParags()
{
    par1.innerHTML=parag1[curidx];
    par2.innerHTML=parag2[curidx];
}
function nextItem()
{
    initialize();
    let lastidx=curidx;
    curidx+=1;
    curidx%=elements;
    changeParags();
    removeClasses();
    par1.offsetWidth;
    par1.classList.add("animRight");
    par2.classList.add("animRight");
    dots[lastidx].style.fontSize = "40pt";
    dots[curidx].style.fontSize = "50pt";
}
function prevItem()
{
    initialize();
    let lastidx=curidx;
    curidx-=1;
    if(curidx<0)
    {
        curidx=elements-1;
    }
    changeParags();
    removeClasses();
    par1.offsetWidth;
    par1.classList.add("animLeft");
    par2.classList.add("animLeft");
    dots[lastidx].style.fontSize = "40pt";
    dots[curidx].style.fontSize = "50pt";
}
parag1[0]='<span style="font-family: \'Raleway\'; font-weight: bold; font-size: 40pt;">Alecto</span> is simple PSD Template';
parag2[0]='Nam varius accumsan elementum aliquam';
parag1[1]='This is template by Martin Marinov';
parag2[1]='Use it good';
parag1[2]='Basicaly I dont know what to write here but have fun';
parag2[2]='Have fun';
parag1[3]='Another item';
parag2[3]='Just one more';
parag1[4]='Last item';
parag2[4]='The last one';