// Count the characters of slides and speaker notes separately with a presentation visitor.

// The Notes and NotesEnd hooks enclose the notes page, so the Text hook can tell where the text comes from.

// Add a shape and notes to a slide, count the characters of each part and write the counts into a shape.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 60 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.GetDocContent().GetElement(0).AddText("Quarterly results");
slide.AddObject(shape);
slide.AddNotesText("Mention the growth in the second quarter.");

let inNotes = false;
let slideCharacters = 0;
let notesCharacters = 0;
const visitor = presentation.GetVisitor();
visitor.Notes = function () {
	inNotes = true;
	return false;
};
visitor.NotesEnd = function () {
	inNotes = false;
};
visitor.Text = function (text) {
	if (inNotes)
		notesCharacters += text.length;
	else
		slideCharacters += text.length;
};
visitor.Traverse({notes: true});

const result = Api.CreateShape("rect", 300 * 36000, 60 * 36000, fill, stroke);
result.SetPosition(608400, 3600000);
result.GetDocContent().GetElement(0).AddText("Slide characters: " + slideCharacters + ", notes characters: " + notesCharacters);
slide.AddObject(result);