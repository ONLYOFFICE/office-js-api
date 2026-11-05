// Find the longest text run of a presentation with a presentation visitor.

// The RunEnd hook is called after all the text of a run has been visited.

// Add a shape with three runs, measure the text of each one and make the longest run italic.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 60 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
const paragraph = shape.GetDocContent().GetElement(0);
const texts = ["Short. ", "This run has the longest text. ", "Medium run."];
for (let i = 0; i < texts.length; ++i) {
	const run = Api.CreateRun();
	run.AddText(texts[i]);
	paragraph.AddElement(run);
}
slide.AddObject(shape);

let length = 0;
let maxLength = -1;
let longest = null;
const visitor = presentation.GetVisitor();
visitor.Run = function () {
	length = 0;
	return false;
};
visitor.Text = function (text) {
	length += text.length;
};
visitor.RunEnd = function (run) {
	if (length > maxLength) {
		maxLength = length;
		longest = run;
	}
};
visitor.Traverse();

longest.SetItalic(true);