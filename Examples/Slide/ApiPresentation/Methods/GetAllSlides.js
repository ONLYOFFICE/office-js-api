// List all slides in a presentation.

// How do I access every slide I created in a presentation?

// Add new slides and count the total in a presentation.

const presentation = Api.GetPresentation();
const firstSlide = presentation.GetSlideByIndex(0);

const count = 3;
for (let i = 0; i < count; i++) {
	presentation.AddSlide(Api.CreateSlide());
}

const slides = presentation.GetAllSlides();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(50, 100, 150));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 100 * 36000, fill, stroke);
firstSlide.AddObject(shape);

const paragraph =  shape.GetContent().GetElement(0);
paragraph.AddText('Total slides count: ' + slides.length);