	var obj = document.getElementById("pic");
	var num = 1;
	function lunbo() {
		obj.src = "img/" + num + '.jpg';
		num++;
		if (num == 4) {
			num = 1;
		}
	}
	setInterval("lunbo()", 2500);

