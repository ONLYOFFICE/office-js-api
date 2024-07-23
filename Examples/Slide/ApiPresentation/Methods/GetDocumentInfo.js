// This example shows how to get the document info represented as an object and paste the application name into the document.
builder.CreateFile("pptx");
const oPresentation = Api.GetPresentation();
const oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
const oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
const oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
const oFill = Api.CreateRadialGradientFill([oGs1, oGs2]);
const oStroke = Api.CreateStroke(0, Api.CreateNoFill());
const oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
const oDocContent = oShape.GetDocContent();
const oParagraph = oDocContent.GetElement(0);
const oDocInfo = oPresentation.GetDocumentInfo();
oParagraph.AddText('This document has been created with: ' + oDocInfo.Application);
oSlide.AddObject(oShape);
builder.SaveFile("pptx", "GetDocumentInfo.pptx");
builder.CloseFile();