// This example shows how to get the form key.
var oDocument = Api.GetDocument();
var oTextForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oTextForm);
var sKey = oTextForm.GetFormKey();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Form key: " + sKey);
oDocument.Push(oParagraph);