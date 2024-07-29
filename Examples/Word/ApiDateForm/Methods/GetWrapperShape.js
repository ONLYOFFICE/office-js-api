// This example shows how to get a shape in which the form is placed to control the position and size of the fixed size form frame.
var oDocument = Api.GetDocument();
var oDateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oDateForm);
oDateForm.ToFixed(10 * 240, 2 * 240);
var oShape = oDateForm.GetWrapperShape();
var oStroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61)));
oShape.SetOutLine(oStroke);