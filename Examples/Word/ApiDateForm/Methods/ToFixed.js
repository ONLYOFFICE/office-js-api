// This example converts the current form to a fixed size form.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oDateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oDateForm);
oDateForm.ToFixed(10 * 240, 2 * 240);
var bFixed = oDateForm.IsFixed();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The first form from this document has a fixed size: " + bFixed);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "ToFixed.docx");
builder.CloseFile();