// This example shows how to get the text properties from the form.
var oDocument = Api.GetDocument();
var oTextForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oTextForm);
var oTextPr = Api.CreateTextPr();
oTextPr.SetFontSize(30);
oTextPr.SetBold(true);
oTextForm.SetTextPr(oTextPr);
var oFormTextPr = oTextForm.GetTextPr();
oFormTextPr.SetItalic(true);
oTextForm.SetTextPr(oFormTextPr);