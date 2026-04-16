// Add text to the notes page of a slide in a presentation.

// How can I add the notes text using a slide in a presentation?

// Add the notes text for a slide in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 150 * 36000, fill, stroke);
shape.SetPosition(0, 3 * 36000);
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);

const isNotesAdded = slide.AddNotesText('This is a note added using AddNotesText method');
if (isNotesAdded) {
	paragraph.AddText("Notes were successfully added to the slide.");
} else {
	paragraph.AddText("Failed to add notes.");
}

slide.AddObject(shape);