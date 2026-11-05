// Report the number of layouts of every slide master with a presentation visitor.

// The Master hook is called for each slide master when the traversal runs with the masters option.

// Traverse the masters of the presentation and write their layout counts into a shape.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());

const counts = [];
const visitor = presentation.GetVisitor();
visitor.Slide = function () {
	return true;
};
visitor.Master = function (master) {
	counts.push(master.GetLayoutsCount());
	return true;
};
visitor.Traverse({masters: true});

const result = Api.CreateShape("rect", 300 * 36000, 60 * 36000, fill, stroke);
result.SetPosition(608400, 3600000);
result.GetDocContent().GetElement(0).AddText("Layouts per master: " + counts.join(", "));
slide.AddObject(result);