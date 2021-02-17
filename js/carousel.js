document.addEventListener('DOMContentLoaded', function () {
	var splide = new Splide('#splide', {
		focus: 'center',
		autoplay: false,
		updateOnMove: true,
		pagination: true,
		padding: '0%',
		perPage: 1,
		throttle: 300,
		video: {
			autoplay: true,
			mute: true,
			disableOverlayUI: true,
			hideControls: false,
		},
	}).mount();
});
