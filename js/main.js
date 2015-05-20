(function() {

	$displayTime = document.querySelector('.color-clock-time');
	$displayTime.addEventListener('mouseenter', showHexColor);
	$displayTime.addEventListener('mouseleave', displayCurrentTime);
	$secondStatus = document.querySelector('.color-clock-status');
	$bodyColor = document.querySelector('body');
	var displayTime = [];
	var hexTime = '';
	var colors = [];
	var currentTime = '';
	var hover = false;
	
	function generateCurrentTime() {
		var currentDate = new Date();
		displayTime = [currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds()];
		currentSecondsPercentage(displayTime[2]);
		for (var i = 0; i < displayTime.length; i++) {
			displayTime[i] < 10 ? displayTime[i] = '0' + displayTime[i] : false;
		}
		currentTime = (displayTime[0] + ':' + displayTime[1] + ':' + displayTime[2]);
		
		hover === true ? showHexColor() : displayCurrentTime();

	};

	window.setInterval(function() {
			generateCurrentTime();
			currentSecondsPercentage(displayTime[2]);
			changeBackgroundColor();
		}, 1000);

	function showHexColor() {
		$displayTime.textContent = colors[0] + ':' + colors[1] + ':' + colors[2];
		hover = true;
	}

	function displayCurrentTime() {
		$displayTime.innerHTML = currentTime;
		hover = false;
	}

	function currentSecondsPercentage(seconds) {
		var secondsPercentage = ((seconds/60)*100).toString() + '%';
		$secondStatus.style.width = secondsPercentage;
	}

	function timeToHexConversion() {
		colors[0] = ('0' + Number(displayTime[0]).toString(16)).slice(-2);
		colors[1] = ('0' + Number(displayTime[1]).toString(16)).slice(-2);
		colors[2] = ('0' + Number(displayTime[2]).toString(16)).slice(-2);
		hexTime = colors[0] + colors[1] + colors[2];
		console.log(hexTime);
		return hexTime;
	}

	function changeBackgroundColor() {
		$bodyColor.style.backgroundColor = '#' + timeToHexConversion();
	}

	generateCurrentTime();
	changeBackgroundColor();

})();