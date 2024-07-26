// This example shows how to make a copy of the form.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTextForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oTextForm);
var oCopyTextForm = oTextForm.Copy();
oParagraph.AddLineBreak();
oParagraph.AddElement(oCopyTextForm);
builder.SaveFile("docx", "Copy.docx");
builder.CloseFile();