// This example converts the ApiMaster object into the JSON object.

// How to convert a slide master object to a JSON object.

// Get a slide master object from a slide and convert to JSON.

var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oMaster = oPresentation.GetMaster(0);
var json = oMaster.ToJSON(true);
var oMasterFromJSON = Api.FromJSON(json);
oSlide.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
var sType = oMasterFromJSON.GetClassType();
oParagraph.AddText("Class type = " + sType);
oSlide.AddObject(oShape);