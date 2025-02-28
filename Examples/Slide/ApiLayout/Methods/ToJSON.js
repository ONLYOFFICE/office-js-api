// This example converts the ApiLayout object into the JSON object.

// How to convert a layout object to a JSON object.

// Get a slide layout object from a slide and convert to JSON.

var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oMaster = oPresentation.GetMaster(0);
var oLayout = oMaster.GetLayout(0);
var json = oLayout.ToJSON(true, false);
var oLayoutFromJSON = Api.FromJSON(json);
oMaster.AddLayout(0, oLayoutFromJSON);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
var sType = oLayoutFromJSON.GetClassType();
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.AddText("Class type = " + sType);
oLayoutFromJSON.AddObject(oShape);
oSlide.ApplyLayout(oLayoutFromJSON);