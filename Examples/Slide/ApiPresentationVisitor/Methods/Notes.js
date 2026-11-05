// Collect the speaker notes of every slide with a presentation visitor.

// The Notes hook is called for the notes page of each slide when the traversal runs with the notes option.

// Add notes to two slides and write the notes text of each slide into a shape.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
slide.AddNotesText("Greet the audience.");
const second = Api.CreateSlide();
presentation.AddSlide(second);
second.AddNotesText("Show the budget chart.");

const notesTexts = [];
let slideNumber = 0;
const visitor = presentation.GetVisitor();
visitor.Slide = function (currentSlide) {
	slideNumber = currentSlide.GetSlideIndex() + 1;
	return false;
};
visitor.Notes = function (notesPage) {
	const body = notesPage.GetBodyShape();
	if (body)
		notesTexts.push("slide " + slideNumber + ": " + body.GetDocContent().GetElement(0).GetText().trim());
	return true;
};
visitor.Traverse({notes: true});

const result = Api.CreateShape("rect", 300 * 36000, 60 * 36000, fill, stroke);
result.SetPosition(608400, 3600000);
result.GetDocContent().GetElement(0).AddText(notesTexts.join("; "));
slide.AddObject(result);