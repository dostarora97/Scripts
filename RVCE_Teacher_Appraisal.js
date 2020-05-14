var option = "Good";
var teacher_list = document.getElementsByClassName("list-group")[0].childNodes;
for(var j=0; j<teacher_list.length; j++)
{
	var teacher = teacher_list[j];
	if(teacher.classList != undefined)
	{
		var rad_btns = document.getElementsByClassName("radio");
		for(var i=0; i<rad_btns.length; i++)
		{
			var label = rad_btns[i].childNodes[1];
			var label_text = label.innerText;
			if (label_text == option)
			{
				label.click();
			}
		}
		var submit_btn = document.getElementsByClassName("btn btn-primary btn-submit btn-lg");
		submit_btn[0].click();
	}
}
