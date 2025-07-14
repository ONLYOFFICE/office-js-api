const addSlides = function () {
	const count = Asc.scope.count;
	const presentation = Api.GetPresentation();
	for (let i = 0; i < count; i += 1) {
		const slide = Api.CreateSlide();
		presentation.AddSlide(slide);
	}
};

Asc.scope.count = 1;
Asc.plugin.callCommand(addSlides);
Asc.plugin.executeMethod('GoToSlide', [2]);
