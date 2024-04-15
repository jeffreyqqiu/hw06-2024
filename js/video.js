var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
    video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log(video)
	video.play();
	document.getElementById("volume").textContent = `${Math.round(video.volume * 100)}%`;
});

document.querySelector("#pause").addEventListener("click", function() {
    if (!video.paused) {
        video.pause();
    }
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("New Speed: ", video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate *= 1.1;
	console.log("New Speed: ", video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 10;
    if (video.currentTime > video.duration) {
        video.currentTime = 0;
    }
    console.log('Video current time: ', video.currentTime.toFixed(2) + ' seconds');
});

document.querySelector("#mute").addEventListener("click", function() {
	if (!video.muted) {
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
	} else {
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";	}
});

document.querySelector("#slider").addEventListener("input", function() {
	video.volume = (document.getElementById("slider").value / 100);
	document.getElementById("volume").textContent = `${Math.round(video.volume * 100)}%`;
});

document.getElementById("vintage").addEventListener("click", function(){
	document.querySelector("video").classList.add("oldSchool");
});

document.getElementById("orig").addEventListener("click", function(){
	document.querySelector("video").classList.remove("oldSchool");
});