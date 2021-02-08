document.addEventListener('DOMContentLoaded', function () {
	new Splide('#splide', {
		type: 'loop',
		focus: 'center',
		autoplay: false,
		// interval: 8000,
		// flickMaxPages: 1,
		updateOnMove: true,
		pagination: false,
		padding: '0%',
		perPage: 1,
		throttle: 300,
		breakpoints: {
			// 1440: {
			// 	perPage: 1,
			// 	padding: '0%',
			// },
		},
		video: {
			autoplay: true,
			mute: true,
		},
	}).mount();
});
