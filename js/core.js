function getNum(a) //конвертирует "150px" в 150
{
var t = new RegExp("()px");
var res=a.replace(t, "$1");
return parseInt(res);
}

function render()
{
	block.innerHTML='';

	for(var j=0; j<localStorage.getItem("count"); j++)
	{
		if(j%10==0 && j!=0) { block.innerHTML=block.innerHTML+"<br>" }
		var elem = document.createElement('button');
		elem.innerHTML=localStorage.getItem(j);
		elem.className="keybutton";
		block.appendChild(elem);
	}

	del.id="del";
	ad.id="ad";
	del.innerHTML="X";
	ad.innerHTML="+";
	del.style.width=del.style.height=butS+'px';
	ad.style.width=ad.style.height=butS+'px';
	block.appendChild(del);
	block.appendChild(ad);
}

function setFunc()
{
	var el=document.getElementsByClassName("keybutton");
	for(var i=0; i<localStorage.getItem("count"); i++)
	{
		el[i].onclick= function()
		{
			plus(this.innerHTML);
		}
	}
}

function plus(a)
{
	var text=document.getElementsByName("body")[0];
	text.value=text.value+a;
	text.focus();
}

function delFunc(a)
{
	var i=0;
	while (i<localStorage.getItem("count") && localStorage.getItem(i)!=a) {i++}
	i++;
	for(i; i<localStorage.getItem("count"); i++)
	{
		localStorage[i-1]=localStorage[i];
	}
	localStorage.removeItem(i);
	localStorage["count"]=localStorage["count"]-1;
	render();
	setFunc();
	del.style.background="#e6e6fa";
}




var size=100 //высота блока
var butS=35 //высота управляющих кнопок

var chatBlock=document.getElementById("chatMessages");
//chatBlock.style.top=(getNum(chatBlock.style.top)-20)+"px"; // установка нового значения
chatBlock.style.bottom="242px" //магическое число - новое значение высоты

var block=document.createElement('div');
block.id="keyboard";

document.getElementById('textchat').appendChild(block)
	
block.style.height=size+'px';
block.style.bottom="142px";//(document.body.clientHeight-getNum(document.getElementById('chatMessages').style.height)-37)+"px"

var del=document.createElement('button');
var ad=document.createElement('button');


del.onclick=function()
{
	this.style.background="#787878";
	var el=document.getElementsByClassName("keybutton");
	for(var i=0; i<localStorage.getItem("count"); i++)
	{
		el[i].onclick= function()
		{
			delFunc(this.innerHTML); //TODO: тут написать функцию удаления для каждой кнопки
		}
	}
}

ad.onclick=function()
{
	var sym=prompt("Введите 1 новый символ: ");
	sym=sym[0];
	localStorage.setItem(localStorage.getItem("count"), sym);
	localStorage["count"]=parseInt(localStorage["count"])+1;
	render();
	setFunc();
}


if(localStorage.getItem("count")==null) //первый раз
{
	var arr=['α', 'β', 'γ', 'π', 'ω', 'φ', 'μ', 'λ', 'ρ', '∫', 'Σ', '√', '∂', '∞', '→', 'Δ', '∇', '∈', '∅', '∀', '≈'];
	for(var i=0; i<arr.length; i++)
	{
		localStorage.setItem(i, arr[i]); //установка первоначальных значений
	}
	localStorage.setItem("count", arr.length);
}



render();
setFunc();

