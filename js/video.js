var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	var video = document.querySelector('video');
    if (video) {
        video.autoplay = false;
        video.loop = false;
        // console.log('Autoplay off and looping off.');
    } else {
        // console.log('Video element not found!');
    }
});

document.querySelector("#play").addEventListener("click", function() {
	var video = document.querySelector("video");
	// console.log("Play Video");
	video.play();
	document.getElementById("volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	var video = document.querySelector('video');
    if (!video.paused) {
        video.pause();
    }
});

document.querySelector("#slower").addEventListener("click", function() {
	var video = document.querySelector('video');
	if (!video.paused) {
		video.playbackRate *= 0.9;
		console.log("New Speed: ", video.playbackRate)
	}
});

document.querySelector("#faster").addEventListener("click", function() {
	var video = document.querySelector("video");
	if (!video.paused) {
		video.playbackRate *= 1.1;
		console.log("New Speed: ", video.playbackRate)
	}
});

document.querySelector("#skip").addEventListener("click", function() {
	var video = document.querySelector("video");
	video.currentTime += 10;
    if (video.currentTime > video.duration) {
        video.currentTime = 0;
    }
    console.log('Video current time: ', video.currentTime.toFixed(2) + ' seconds');
});

document.querySelector("#mute").addEventListener("click", function() {
	var video = document.querySelector("video");
	if (!video.muted) {
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
		document.getElementById("volume").innerHTML = video.volume * 100 + "%";
	} else {
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
		document.getElementById("volume").innerHTML = video.volume * 100 + "%";
	}
});

document.querySelector("#slider").addEventListener("input", function() {
	var video = document.querySelector("video");
	video.volume = document.getElementById("slider").ariaValue;

	document.getElementById("volume").textContent = `${Math.round(video.volume * 100)}%`;
});

document.getElementById("vintage").addEventListener("click", function(){
	document.body.classList.add("oldSchool");
});

document.getElementById("orig").addEventListener("click", function(){
	document.body.classList.remove("oldSchool");
});