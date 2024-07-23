// This example specifies if the form should be required.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oDateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": false, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oDateForm);
oDateForm.SetRequired(true);
var bRequired = oDateForm.IsRequired();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The first form from this document is required: " + bRequired);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetRequired.docx");
builder.CloseFile();