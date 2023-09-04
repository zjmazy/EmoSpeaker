window.HELP_IMPROVE_VIDEOJS = false;

var INTERP_BASE = "./static/interpolation_video/";
var NUM_INTERP_FRAMES = 100;
var interp_videos = [];


function preloadInterpolationVideos() {
	for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
		var path = INTERP_BASE + '/' + String(i).padStart(6, '0') + '.mp4';
		interp_videos[i] = document.createElement('video');
		interp_videos[i].src = path;
		interp_videos[i].type = 'video/mp4';
		interp_videos[i].controls = true; // 添加控制条
	}
}

function setInterpolationVideo(i) {
var video = interp_videos[i];
video.ondragstart = function() { return false; };
video.oncontextmenu = function() { return false; };
$('#interpolation-video-wrapper').empty().append(video);
}

$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
	

    preloadInterpolationVideos();

    $('#interpolation-slider').on('input', function(event) {
    	setInterpolationVideo(this.value);
    });
    setInterpolationVideo(0);
    $('#interpolation-slider').prop('max', NUM_INTERP_FRAMES - 1);

    bulmaSlider.attach();

})