// This example shows how to get all shapes from the current presentation.

const oPresentation = Api.GetPresentation();
const oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();

// Remove all slide masters from the presentation because the slide masters may also contain shapes
const aSlideMasters = oPresentation.GetAllSlideMasters();
for (let i = 0; i < aSlideMasters.length; i++) {
	const oSlideMaster = aSlideMasters[i];
	oSlideMaster.Delete();
}

// Add multiple shapes to the slide
const shapeTypes = ['heart', 'rect', 'ellipse'];
for (let i = 0; i < shapeTypes.length; i++) {
	const oFill = Api.CreateSolidFill(Api.CreateRGBColor(100 + i * 50, 150, 200));
	const oStroke = Api.CreateStroke(0, Api.CreateNoFill());
	const oShape = Api.CreateShape(shapeTypes[i], 38 * 36000, 38 * 36000, oFill, oStroke);
	oShape.SetPosition(i * 48 * 36000, 0);
	oSlide.AddObject(oShape);
}

// Create a label shape
const oLabelFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 230, 150));
const oLabelStroke = Api.CreateStroke(0, Api.CreateNoFill());
const oLabel = Api.CreateShape('rect', 60 * 36000, 20 * 36000, oLabelFill, oLabelStroke);
oLabel.SetPosition(0, 50 * 36000);
oSlide.AddObject(oLabel);

// Add the number of shapes (including the label shape) as text inside the label
const oDocContent = oLabel.GetDocContent();
const oParagraph = oDocContent.GetElement(0);
const nShapesCount = oPresentation.GetAllShapes().length;
oParagraph.AddText('Shapes: ' + nShapesCount);
