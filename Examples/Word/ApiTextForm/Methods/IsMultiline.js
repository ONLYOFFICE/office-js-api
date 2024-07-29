// This example checks if the text field is multiline.
var oDocument = Api.GetDocument();
var oTextForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oTextForm);
var bMultiline = oTextForm.IsMultiline();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The first text form from this document is multiline: " + bMultiline);
oDocument.Push(oParagraph);