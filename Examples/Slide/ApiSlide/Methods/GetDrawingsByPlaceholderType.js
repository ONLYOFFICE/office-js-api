// Get drawings by placeholder type and remove them from the slide.

// Find all drawings with a specific placeholder type using GetDrawingsByPlaceholderType.

// Delete the retrieved drawings from the presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);

const placeholder = Api.CreatePlaceholder("chart");
shape.SetPlaceholder(placeholder);
slide.AddObject(shape);
const drawingsWithPh = slide.GetDrawingsByPlaceholderType("chart");
for (let i = 0; i < drawingsWithPh.length; i++) {
	drawingsWithPh[i].Delete();
}