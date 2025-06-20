// This example selects the current graphic object.

// How to select a drawing object of the slide.

// Select an object from a slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const allDrawings = slide.GetAllDrawings();
if (allDrawings.length > 0) {
	const drawing = allDrawings[0];
	drawing.Select();
}
