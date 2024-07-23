// This example shows how to get a type of the form.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTextForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oTextForm);
var sFormType = oTextForm.GetFormType();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Form type: " + sFormType);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetFormType.docx");
builder.CloseFile();