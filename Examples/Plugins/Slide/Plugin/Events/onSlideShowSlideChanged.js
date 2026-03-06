window.Asc.plugin.attachEditorEvent('onSlideShowSlideChanged', (data) => {
	data.previousSlideIndex === -1
		? console.log(`This is the first slide that we are showing
			since the presentation slide show started`)
		: console.log(`Slide changed during presentation:
			from slide index ${data.previousSlideIndex}
			to slide index ${data.slideIndex}`);
});
