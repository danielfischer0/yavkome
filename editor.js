		window.onload = function() {
				var canvas = document.getElementById("editor");
				ctx = canvas.getContext("2d");
				var pressed = false;
				//var startX = 0;
				//var startY = 0;
				//var pos = [];
				var bold = 10;
				var color = '#000000';
				var cap = 'round';
				var lines = Array();
				var i = 0;
				setStyle(bold, color, cap);
				function setStyle(width, color, cap){
					ctx.lineWidth = width;
					ctx.strokeStyle = color;
					ctx.lineCap = cap;
				}
				/*canvas.onmousewheel = function(e){
					bold = ctx.lineWidth += e.wheelDelta / 40;
					setStyle(bold, color, cap);
				}*/
				window.onmousemove = function(e){
					if(pressed) return; //так элегантнее и красивее. Код - читабельнее; После возвращенния значения 
					//Функция прекращает исполнение, даже если после ретурна ещё есть код.
					//ctx.lineTo(e.pageX, e.pageY);
					//ctx.moveTo(e.pageX, e.pageY);
					//ctx.stroke();
					lines.push({
						x: e.pageX,
						y: e
					})
					ctx.beginPath()
					var controlX = Math.abs(lines[i] - e.pageX) / 2;
					var controlY = Math.abs(lines[i + 1] - e.pageY) * 2;
					ctx.moveTo(lines[i], lines[i + 1]);
					ctx.quadraticCurveTo(controlX,controlY,e.pageX,e.pageY);
					ctx.stroke();

					lines.push(e.pageX, e.pageY);
					i++;
				}
				canvas.onmousedown = function(e){
					ctx.moveTo(e.pageX, e.pageY);
					pressed = true;
					startX = e.pageX;
					startY = e.pageY;
				}
				window.onmouseup = function(e){
					pressed = false;
					lines.length = 0;
					i = 0;
					//var controlX = Math.abs(startX - e.pageX) / 2;
					//var controlY = Math.abs(startY - e.pageY) * 2;
					//ctx.moveTo(startX, startY);
					//ctx.quadraticCurveTo(controlX,controlY,e.pageX,e.pageY);
					//ctx.stroke();
				}
				document.getElementById('color').onchange = function(e){
					color = document.getElementById('color').value;
					setStyle(bold, color, cap);
				}
			}
