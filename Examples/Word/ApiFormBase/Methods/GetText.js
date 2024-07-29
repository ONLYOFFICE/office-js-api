// This example shows how to get the text from the form.
var oDocument = Api.GetDocument();
var oTextForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oTextForm);
var sText = oTextForm.GetText();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Form text: " + sText);
oDocument.Push(oParagraph);