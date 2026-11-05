// Count the paragraphs of every slide with a presentation visitor.

// The SlideEnd hook is called after all the drawings and text of a slide have been visited.

// Add shapes to two slides, count the paragraphs of each slide and write the counts into a shape.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const intro = Api.CreateShape("rect", 300 * 36000, 60 * 36000, fill, stroke);
intro.SetPosition(608400, 1267200);
intro.GetDocContent().GetElement(0).AddText("Introduction");
slide.AddObject(intro);
const second = Api.CreateSlide();
presentation.AddSlide(second);
const list = Api.CreateShape("rect", 300 * 36000, 60 * 36000, fill, stroke);
list.SetPosition(608400, 1267200);
const content = list.GetDocContent();
content.GetElement(0).AddText("Goals");
const next = Api.CreateParagraph();
next.AddText("Timeline");
content.Push(next);
second.AddObject(list);

const counts = [];
let paragraphs = 0;
const visitor = presentation.GetVisitor();
visitor.Slide = function () {
	paragraphs = 0;
	return false;
};
visitor.Paragraph = function () {
	paragraphs += 1;
	return true;
};
visitor.SlideEnd = function () {
	counts.push(paragraphs);
};
visitor.Traverse();

const result = Api.CreateShape("rect", 300 * 36000, 60 * 36000, fill, stroke);
result.SetPosition(608400, 3600000);
result.GetDocContent().GetElement(0).AddText("Paragraphs per slide: " + counts.join(", "));
slide.AddObject(result);