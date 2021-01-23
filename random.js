<script language="JavaScript">

function random_imglink(){
	var myimages=new Array()
	//specify random images below. You can have as many as you wish
	myimages[1]="test.jpg"
	myimages[2]="test1.jpg"
	myimages[3]="http://whatever.com/graphic.jpg"

	var ry=Math.floor(Math.random()*myimages.length)
	if (ry==0)
		ry=1
	document.write('<img src="'+myimages[ry]+'" border=0>')
}

random_imglink()

</script>