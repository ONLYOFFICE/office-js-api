// This example checks if the current form is fixed size.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTextForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oTextForm);
oTextForm.ToFixed(10 * 240, 2 * 240);
var bFixed = oTextForm.IsFixed();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The first form from this document is fixed: " + bFixed);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "IsFixed.docx");
builder.CloseFile();