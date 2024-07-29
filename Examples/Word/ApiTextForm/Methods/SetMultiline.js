// This example specifies if the text field should be miltiline.
var oDocument = Api.GetDocument();
var oTextForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "autoFit": false});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oTextForm);
oTextForm.ToFixed(3 * 240, 3 * 240);
oTextForm.SetMultiline(true);
var bMultiline = oTextForm.IsMultiline();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The first text form from this document is multiline: " + bMultiline);
oDocument.Push(oParagraph);