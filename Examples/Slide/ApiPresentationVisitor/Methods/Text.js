// Count the words of a presentation, including speaker notes, with a presentation visitor.

// The Text hook receives the text of all runs, and with the notes option it also receives the text of the speaker notes.

// Add a shape and notes to a slide, count their words and write the result into a shape.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 60 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.GetDocContent().GetElement(0).AddText("The quarterly report is ready.");
slide.AddObject(shape);
slide.AddNotesText("Please review it before the meeting.");

let text = "";
const visitor = presentation.GetVisitor();
visitor.Text = function (piece) {
	text += piece;
};
visitor.ParagraphEnd = function () {
	text += " ";
};
visitor.Traverse({notes: true});

const words = text.split(/\s+/).filter(function (word) {
	return word !== "";
});
const result = Api.CreateShape("rect", 300 * 36000, 60 * 36000, fill, stroke);
result.SetPosition(608400, 3600000);
result.GetDocContent().GetElement(0).AddText("Words: " + words.length);
slide.AddObject(result);