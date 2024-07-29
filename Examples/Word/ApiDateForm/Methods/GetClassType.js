// This example gets a class type and pastes it into the presentation.
var oDocument = Api.GetDocument();
var oDateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oDateForm);
var sClassType = oDateForm.GetClassType();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Class type: " + sClassType);
oDocument.Push(oParagraph);