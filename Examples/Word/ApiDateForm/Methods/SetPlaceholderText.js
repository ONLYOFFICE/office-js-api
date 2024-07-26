// This example sets the placeholder text to the current form.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oDateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oDateForm);
oDateForm.SetPlaceholderText("Your placeholder");
builder.SaveFile("docx", "SetPlaceholderText.docx");
builder.CloseFile();