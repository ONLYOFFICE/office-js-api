// Count the drawings of every slide master together with its layouts with a presentation visitor.

// With the layouts option, the MasterEnd hook is called after the drawings of the master and of all its layouts have been visited.

// Traverse the masters and layouts, count all their drawings and write the totals into a shape.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());

const totals = [];
let drawings = 0;
const visitor = presentation.GetVisitor();
visitor.Slide = function () {
	return true;
};
visitor.Master = function () {
	drawings = 0;
	return false;
};
visitor.Drawing = function () {
	drawings += 1;
	return true;
};
visitor.MasterEnd = function () {
	totals.push(drawings);
};
visitor.Traverse({masters: true, layouts: true});

const result = Api.CreateShape("rect", 300 * 36000, 60 * 36000, fill, stroke);
result.SetPosition(608400, 3600000);
result.GetDocContent().GetElement(0).AddText("Drawings per master with its layouts: " + totals.join(", "));
slide.AddObject(result);