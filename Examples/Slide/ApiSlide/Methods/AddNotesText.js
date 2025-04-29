// This example shows how to add text to the notes page of a slide.

const oPresentation = Api.GetPresentation();
const oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();

const oFill = Api.CreateSolidFill(Api.CreateRGBColor(100, 150, 200));
const oStroke = Api.CreateStroke(0, Api.CreateNoFill());
const oShape = Api.CreateShape("rect", 300 * 36000, 150 * 36000, oFill, oStroke);
oShape.SetPosition(0, 3 * 36000);
const oDocContent = oShape.GetDocContent();
const oParagraph = oDocContent.GetElement(0);

const bSuccess = oSlide.AddNotesText('This is a note added using AddNotesText method');
if (bSuccess) {
	oParagraph.AddText("Notes were successfully added to the slide.");
} else {
	oParagraph.AddText("Failed to add notes.");
}

oSlide.AddObject(oShape);
