// Make every paragraph that mentions a word bold in a presentation with a presentation visitor.

// The Paragraph hook receives the paragraphs of shapes, tables and other drawings on all slides.

// Add shapes to two slides and make bold the paragraphs that contain the word "Deadline".

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const plan = Api.CreateShape("rect", 300 * 36000, 60 * 36000, fill, stroke);
plan.SetPosition(608400, 1267200);
plan.GetDocContent().GetElement(0).AddText("Deadline: March 31");
slide.AddObject(plan);
const second = Api.CreateSlide();
presentation.AddSlide(second);
const tasks = Api.CreateShape("rect", 300 * 36000, 60 * 36000, fill, stroke);
tasks.SetPosition(608400, 1267200);
const content = tasks.GetDocContent();
content.GetElement(0).AddText("Collect the feedback");
const deadline = Api.CreateParagraph();
deadline.AddText("Deadline: April 15");
content.Push(deadline);
second.AddObject(tasks);

const visitor = presentation.GetVisitor();
visitor.Paragraph = function (paragraph) {
	if (paragraph.GetText().indexOf("Deadline") !== -1)
		paragraph.SetBold(true);
	return true;
};
visitor.Traverse();