// This example returns the text properties from the current form.
var oDocument = Api.GetDocument();
var oCheckBoxForm = Api.CreateCheckBoxForm({"tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": false});
oCheckBoxForm.SetFormKey("Marital status 1");
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oCheckBoxForm);
oParagraph.AddText(" Married");
oParagraph.AddLineBreak();
oCheckBoxForm = Api.CreateCheckBoxForm({"tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": false});
oCheckBoxForm.SetFormKey("Marital status 2");
oParagraph.AddElement(oCheckBoxForm);
oParagraph.AddText(" Single");
var oTextPr = Api.CreateTextPr();
oTextPr.SetFontSize(30);
oTextPr.SetBold(true);
oCheckBoxForm.SetTextPr(oTextPr);
var oFormTextPr = oCheckBoxForm.GetTextPr();
oFormTextPr.SetItalic(true);
oCheckBoxForm.SetTextPr(oFormTextPr);