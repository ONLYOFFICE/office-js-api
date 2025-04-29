// This example shows how to add text to the body shape of the notes page.

const oPresentation = Api.GetPresentation();
const oSlide = oPresentation.GetSlideByIndex(0);
const oNotesPage = oSlide.GetNotesPage();
oSlide.RemoveAllObjects();

let bAdded = false;
if (oNotesPage) {
	bAdded = oNotesPage.AddBodyShapeText('This text was added using AddBodyShapeText method');
}

const oFill = Api.CreateSolidFill(Api.CreateRGBColor(100, 150, 200));
const oStroke = Api.CreateStroke(0, Api.CreateNoFill());
const oShape = Api.CreateShape('rect', 300 * 36000, 150 * 36000, oFill, oStroke);
oShape.SetPosition(0, 3 * 36000);
const oDocContent = oShape.GetDocContent();
const oParagraph = oDocContent.GetElement(0);

if (bAdded) {
	oParagraph.AddText('Text was successfully added to the body shape.');
} else {
	oParagraph.AddText('Failed to add text to the body shape.');
}

oSlide.AddObject(oShape);
