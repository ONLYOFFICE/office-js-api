// Count the paragraphs of every drawing on a slide with a presentation visitor.

// The DrawingEnd hook is called after all the text of a drawing has been visited.

// Add two named shapes with different numbers of paragraphs and write the count for each shape into a new shape.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const title = Api.CreateShape("rect", 140 * 36000, 60 * 36000, fill, stroke);
title.SetPosition(608400, 1267200);
title.SetName("Title");
title.GetDocContent().GetElement(0).AddText("Project plan");
slide.AddObject(title);
const steps = Api.CreateShape("rect", 140 * 36000, 60 * 36000, fill, stroke);
steps.SetPosition(608400 + 160 * 36000, 1267200);
steps.SetName("Steps");
const content = steps.GetDocContent();
content.GetElement(0).AddText("Design");
const build = Api.CreateParagraph();
build.AddText("Build");
content.Push(build);
slide.AddObject(steps);

const counts = [];
let paragraphs = 0;
const visitor = slide.GetVisitor();
visitor.Drawing = function () {
	paragraphs = 0;
	return false;
};
visitor.Paragraph = function () {
	paragraphs += 1;
	return true;
};
visitor.DrawingEnd = function (drawing) {
	counts.push(drawing.GetName() + ": " + paragraphs);
};
visitor.Traverse();

const result = Api.CreateShape("rect", 300 * 36000, 60 * 36000, fill, stroke);
result.SetPosition(608400, 3600000);
result.GetDocContent().GetElement(0).AddText("Paragraphs per drawing: " + counts.join(", "));
slide.AddObject(result);