// Count the drawings on every slide layout with a presentation visitor.

// The LayoutEnd hook is called after all the drawings of a layout have been visited.

// Traverse the layouts, count the drawings of each one and write the counts into a shape.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());

const counts = [];
let drawings = 0;
const visitor = presentation.GetVisitor();
visitor.Slide = function () {
	return true;
};
visitor.Layout = function () {
	drawings = 0;
	return false;
};
visitor.Drawing = function () {
	drawings += 1;
	return true;
};
visitor.LayoutEnd = function (layout) {
	counts.push(layout.GetName() + ": " + drawings);
};
visitor.Traverse({layouts: true});

const result = Api.CreateShape("rect", 300 * 36000, 60 * 36000, fill, stroke);
result.SetPosition(608400, 3600000);
result.GetDocContent().GetElement(0).AddText(counts.join(", "));
slide.AddObject(result);