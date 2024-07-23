// This example clears the form.
// 
// ## Example
// 
// This example clears the form.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oPictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oPictureForm);
oPictureForm.SetImage("https://api.onlyoffice.com/content/img/docbuilder/examples/user-profile.png");
oPictureForm.Clear();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The first form from this document was cleared.");
oDocument.Push(oParagraph);
builder.SaveFile("docx", "Clear.docx");
builder.CloseFile();