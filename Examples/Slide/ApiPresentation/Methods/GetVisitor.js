// Count the text runs of a presentation with a presentation visitor.

// How do I walk through every drawing and text run in a presentation, including grouped shapes?

// Create two shapes on the first slide and count their runs with a visitor.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());

const first = Api.CreateShape("rect", 300 * 36000, 60 * 36000, fill, stroke);
first.SetPosition(608400, 1267200);
first.GetDocContent().GetElement(0).AddText("First shape");
slide.AddObject(first);

const second = Api.CreateShape("rect", 300 * 36000, 60 * 36000, fill, stroke);
second.SetPosition(608400, 3600000);
second.GetDocContent().GetElement(0).AddText("Second shape");
slide.AddObject(second);

let runCount = 0;
const visitor = presentation.GetVisitor();
visitor.Run = function () {
	runCount += 1;
	return false;
};
visitor.Traverse();

const result = Api.CreateShape("rect", 300 * 36000, 60 * 36000, fill, stroke);
result.SetPosition(608400, 5000000);
result.GetDocContent().GetElement(0).AddText("Text runs found: " + runCount);
slide.AddObject(result);
