// This example converts the ApiDocument object into the JSON object.
var oDocument = Api.GetDocument();
var json = oDocument.ToJSON(true, true, true, true, true, true);
var oDocumentFromJSON = Api.FromJSON(json);
var oParagraph = oDocumentFromJSON[0];
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill = Api.CreateLinearGradientFill([oGs1, oGs2], 5400000);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing1 = Api.CreateShape("rect", 3212465, 963295, oFill, oStroke);
oParagraph.AddDrawing(oDrawing1);
var oDrawing2 = Api.CreateShape("wave", 3212465, 963295, oFill, oStroke);
oParagraph.AddDrawing(oDrawing2);
var aDrawings = oDocumentFromJSON[0].GetAllShapes();
oParagraph = oDocument.GetElement(0);
oParagraph.AddDrawing(aDrawings[0]);
oParagraph.AddLineBreak();
oParagraph.AddText("This is the first shape from the JSON document.");