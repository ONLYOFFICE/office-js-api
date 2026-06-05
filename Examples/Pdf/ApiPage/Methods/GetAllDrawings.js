// Retrieve all shapes and graphics from a page in a PDF.

// How do I access all the drawings in a PDF?

// List every visual element on the current page in a PDF.

const doc = Api.GetDocument();
doc.AddPage();
const page = doc.GetPage(doc.GetPagesCount() - 1);

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
	const drawing = allDrawings[allDrawings.length - 1];
	drawing.Select();
}
