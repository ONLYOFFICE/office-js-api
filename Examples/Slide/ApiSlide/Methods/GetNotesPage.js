// Get the notes page from a slide in a presentation.

// How can I get the notes page using a slide in a presentation?

// Get the notes page for a slide in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 150 * 36000, fill, stroke);
shape.SetPosition(0, 3 * 36000);
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);

const notesPage = slide.GetNotesPage();
if (notesPage) {
	paragraph.AddText('Notes page exists on this slide');
} else {
	paragraph.AddText('Notes page is not available');
}

slide.AddObject(shape);