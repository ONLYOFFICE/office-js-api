// List the names of all drawings on a slide layout with a layout visitor.

// How do I enumerate the placeholders and shapes of a slide layout, including grouped ones?

// Take the first layout of the first master and collect the names of its drawings.

const presentation = Api.GetPresentation();
const layout = presentation.GetMaster(0).GetLayout(0);

const names = [];
const visitor = layout.GetVisitor();
visitor.Drawing = function (drawing) {
	names.push(drawing.GetName() || drawing.GetClassType());
	return false;
};
visitor.Traverse();

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
const fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const result = Api.CreateShape("rect", 300 * 36000, 60 * 36000, fill, stroke);
result.SetPosition(608400, 1267200);
result.GetDocContent().GetElement(0).AddText("Layout drawings: " + names.join(", "));
slide.AddObject(result);
