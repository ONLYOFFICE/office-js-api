// This example shows how to get the tip text of the current form.
var oDocument = Api.GetDocument();
var oDateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oDateForm);
var sTipText = oDateForm.GetTipText();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Form tip text: " + sTipText);
oDocument.Push(oParagraph);