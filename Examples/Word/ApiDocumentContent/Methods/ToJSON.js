// This example converts the ApiDocumentContent object into the JSON object.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("rect", 3212465, 963295, oFill, oStroke);
oParagraph.AddDrawing(oDrawing);
var oDocContent = oDrawing.GetDocContent();
oDocContent.RemoveAllElements();
oParagraph = oDocContent.GetElement(0);
oParagraph.AddText("We removed all elements from the shape and added a new paragraph inside it.");
var json = oDocContent.ToJSON(false, true);
var oDocContentFromJSON = Api.FromJSON(json);
var sType = oDocContentFromJSON.GetClassType();
oDocContentFromJSON.RemoveAllElements();
oParagraph = oDocContentFromJSON.GetElement(0);
oParagraph.AddText("Class type = " + sType);
Api.ReplaceDocumentContent(oDocContentFromJSON);