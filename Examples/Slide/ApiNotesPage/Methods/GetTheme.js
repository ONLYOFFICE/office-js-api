// Access the theme that styles the notes page of a slide in a presentation.

// Identify the theme source shared between the notes page and its slide master.

// Retrieve the notes page theme and display its class type in a shape.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const notesPage = slide.GetNotesPage();

let message = 'No notes page available.';

if (notesPage) {
	const theme = notesPage.GetTheme();
	if (theme) {
		message = 'Notes page theme type: ' + theme.GetClassType();
	} else {
		message = 'No theme available.';
	}
}

const fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 150 * 36000, fill, stroke);
shape.SetPosition(0, 3 * 36000);
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText(message);

slide.RemoveAllObjects();
slide.AddObject(shape);
