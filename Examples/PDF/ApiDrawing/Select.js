// How to select a drawing object of the page.

// Select an object from a page.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 425, 184, fill, stroke);
shape.SetPosition(48, 100);

const height = shape.GetHeight();
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Example drawing");
page.AddObject(shape);

const allDrawings = page.GetAllDrawings();
if (allDrawings.length > 0) {
	const drawing = allDrawings[0];
	drawing.Select();
}