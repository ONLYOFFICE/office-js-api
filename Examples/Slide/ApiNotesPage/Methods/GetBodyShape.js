// This example shows how to get the body shape from a notes page.

const oPresentation = Api.GetPresentation();
const oSlide = oPresentation.GetSlideByIndex(0);
const oNotesPage = oSlide.GetNotesPage();

let sMessage = 'No notes page available.';

if (oNotesPage) {
	const oBodyShape = oNotesPage.GetBodyShape();
	if (oBodyShape) {
		sMessage = 'Body shape exists.';
	} else {
		sMessage = 'No body shape available.';
	}
}

const oFill = Api.CreateSolidFill(Api.CreateRGBColor(100, 150, 200));
const oStroke = Api.CreateStroke(0, Api.CreateNoFill());
const oShape = Api.CreateShape('rect', 300 * 36000, 150 * 36000, oFill, oStroke);
oShape.SetPosition(0, 3 * 36000);
const oDocContent = oShape.GetDocContent();
const oParagraph = oDocContent.GetElement(0);
oParagraph.AddText(sMessage);

oSlide.RemoveAllObjects();
oSlide.AddObject(oShape);
