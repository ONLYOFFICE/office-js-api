// This example shows how to get a limit of the text field characters.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTextForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "cellWidth": 3, "multiLine": false, "autoFit": false});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oTextForm);
oTextForm.SetCharactersLimit(5);
oTextForm.SetText("John Smith");
var nLimit = oTextForm.GetCharactersLimit();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Characters limit: " + nLimit);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetCharactersLimit.docx");
builder.CloseFile();