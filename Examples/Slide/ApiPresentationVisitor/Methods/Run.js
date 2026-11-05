// Underline the bold runs of a presentation with a presentation visitor.

// The Run hook receives each text run with its formatting, and returning true skips the text of the run.

// Add a shape with regular and bold runs and underline the bold ones.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 60 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
const paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Submit the report ");
const deadline = Api.CreateRun();
deadline.AddText("before Friday");
deadline.SetBold(true);
paragraph.AddElement(deadline);
slide.AddObject(shape);

const visitor = presentation.GetVisitor();
visitor.Run = function (run) {
	if (run.GetTextPr().GetBold())
		run.SetUnderline(true);
	return true;
};
visitor.Traverse();