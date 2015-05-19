(function() {

	$displayTime = document.querySelector('.color-clock-time');
	$secondStatus = document.querySelector('.color-clock-status');
	var displayTime = [];
	var backgroundColorHex = '000000';
	var hexTime = '';
	var colors = [];
	
	function generateCurrentTime() {
		var currentDate = new Date();
		var displayTime = [currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds()];
		currentSecondsPercentage(displayTime[2]);
		for (var i = 0; i < displayTime.length; i++) {
			if (displayTime[i] < 10) {
				displayTime[i] = '0' + displayTime[i];
			}
		}
		var currentTime = ('' + displayTime[0] + ':' + displayTime[1] + ':' + displayTime[2]);
		logCurrentTimeEverySecond(currentTime);
	};

	function logCurrentTimeEverySecond(time) {
		window.setInterval(function() {
			displayCurrentTime(time);
			generateCurrentTime();
			changeBackgroundColor();
			currentSecondsPercentage(displayTime[2]);
			backgroundColorHex = '' + displayTime[0] + displayTime[1] + displayTime[3];
			console.log(backgroundColorHex);
		}, 1000);
		displayCurrentTime(time);
	}

	function displayCurrentTime(time) {
		$displayTime.innerHTML = time;
	}

	function currentSecondsPercentage(seconds) {
		var secondsPercentage = ((seconds/60)*100).toString() + '%';
		$secondStatus.style.width = secondsPercentage;
	}

	function timeToHexConversion() {
		for (var i = 0; i < displayTime.length; i++) {
			displayTime = displayTime[i]
		}
	}

	function changeBackgroundColor() {
		document.querySelector('body').style.backgroundColor = '#' + timeToHexConversion();
	}

	generateCurrentTime();

})();