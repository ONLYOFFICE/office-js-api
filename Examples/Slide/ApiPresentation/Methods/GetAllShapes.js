// This example shows how to get all shapes from the current presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const slideMasters = presentation.GetAllSlideMasters();
for (let i = 0; i < slideMasters.length; i++) {
	const slideMaster = slideMasters[i];
	slideMaster.Delete();
}

const shapeTypes = ['heart', 'rect', 'ellipse'];
for (let i = 0; i < shapeTypes.length; i++) {
	const fill = Api.CreateSolidFill(Api.CreateRGBColor(100 + i * 50, 150, 200));
	const stroke = Api.CreateStroke(0, Api.CreateNoFill());
	const shape = Api.CreateShape(shapeTypes[i], 38 * 36000, 38 * 36000, fill, stroke);
	shape.SetPosition(i * 48 * 36000, 0);
	slide.AddObject(shape);
}

const labelFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 230, 150));
const labelStroke = Api.CreateStroke(0, Api.CreateNoFill());
const label = Api.CreateShape('rect', 60 * 36000, 20 * 36000, labelFill, labelStroke);
label.SetPosition(0, 50 * 36000);
slide.AddObject(label);

const docContent = label.GetDocContent();
const paragraph = docContent.GetElement(0);
const shapesCount = presentation.GetAllShapes().length;
paragraph.AddText('Shapes: ' + shapesCount);
