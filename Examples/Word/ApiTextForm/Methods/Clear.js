// This example clears the form.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTextForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oTextForm);
oTextForm.SetText("John Smith");
oTextForm.Clear();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The first form from this document was cleared.");
oDocument.Push(oParagraph);
builder.SaveFile("docx", "Clear.docx");
builder.CloseFile();