function CE()
{
    var screenNum = display.value;
    var len= screenNum.length-1;
    var backOne = screenNum.substring(0,len);
    display.value = backOne;
}

function c(val)
{
	document.getElementById("display").value = val;
}

function math(val)
{
	document.getElementById("display").value += val;
}

function e()
{
	try
	{
		c(eval(document.getElementById("display").value))
	}
	catch(e)
	{
		c('Error')
	}
	
}
