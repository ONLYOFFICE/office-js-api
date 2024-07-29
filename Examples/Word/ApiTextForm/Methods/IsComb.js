// This example checks if the text field is a comb of characters with the same cell width.
var oDocument = Api.GetDocument();
var oTextForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "maxCharacters": 10, "multiLine": false, "autoFit": false});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oTextForm);
oTextForm.SetComb(true);
var bComb = oTextForm.IsComb();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The first text form from this document is comb: " + bComb);
oDocument.Push(oParagraph);