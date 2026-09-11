// Replace a word everywhere in a presentation, including notes and masters, keeping the formatting.

// How do I replace text on slides, speaker notes, layouts and masters without losing run formatting?

// Traverse with all options enabled and rewrite each run that contains the word being replaced.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 60 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.GetDocContent().GetElement(0).AddText("Draft agenda");
slide.AddObject(shape);
slide.AddNotesText("Draft speaker notes");

const visitor = presentation.GetVisitor();
visitor.Run = function (run) {
	const text = run.GetText();
	if (text.indexOf("Draft") === -1)
		return true;
	run.ClearContent();
	run.AddText(text.split("Draft").join("Final"));
	return true;
};
visitor.Traverse({notes: true, masters: true, layouts: true});
