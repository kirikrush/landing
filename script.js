let current="a";
let previous;
$("#1_b").css({
	"opacity":"1",
	"left":"357px"
});

function rotateR(cur,prev){
	switch(prev){
		case 'a':	
			$('#1_b').css({
				"left":"-300px",
				"opacity":"0"
			});
			break;
		case "b":
			$('#2_b').css({
				"left":"-300px",
				"opacity":"0"
			});
			break;
		case "c":
			$('#3_b').css({
				"left":"-300px",
				"opacity":"0"
			});
			break;
	}
	switch (cur){
		case 'b' :
			$('#2_b').css({
				"opacity":"1",
				"left":"357px",
				"right":"0px"
			});
			break;
		case 'c':
			$('#3_b').css({
				"opacity":"1",
				"left":"357px",
				"right":"0px"
			});
			break;
		case 'd':
			$('#4_b').css({
				"opacity":"1",
				"left":"357px",
				"right":"0px"
			});
				break;
			   }
} 
function rotateL(cur,prev){
	switch(prev){
		case 'b':	
			$('#2_b').css({
				"opacity":"0",
				"right":"-300px"
			});
			break;
		case "c":
			$('#3_b').css({
				"opacity":"0",
				"right":"-300px"
			});
			break;
		case "d":
			$('#4_b').css({
				"opacity":"0",
				"right":"-300px"
			});
			break;
	}
	switch (cur){
		case 'a' :
			$('#1_b').css({
				"opacity":"1",
				"right":"0px",
				"left":"357px"
			});
			break;
		case 'b':
			$('#2_b').css({
				"opacity":"1",
				"right":"0px",
				"left":"357px"
			});
			break;
		case 'c':
			$('#3_b').css({
				"opacity":"1",
				"right":"0px",
				"left":"357px"
			});
				break;
			   }
} 

$('.pagination>div').mousedown(function(event){
	previous = current;
	current = this.id;
	console.log(previous);
	console.log(current);	
	if (current > previous) {
		$('#'+current).removeClass();
		$('#'+current).addClass('active_b');
		$('#'+previous).removeClass();
		$('#'+previous).addClass('but');
		rotateR(current, previous);
	}
	else if (current < previous){
		$('#'+current).removeClass();
		$('#'+current).addClass('active_b');
		$('#'+previous).removeClass();
		$('#'+previous).addClass('but');
		rotateL(current, previous);
	}
	
});