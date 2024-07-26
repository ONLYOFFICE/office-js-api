// This example checks if the current form is fixed size.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oPictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oPictureForm);
oPictureForm.SetImage("https://api.onlyoffice.com/content/img/docbuilder/examples/user-profile.png");
oPictureForm.ToFixed(10 * 240, 10 * 240);
var bFixed = oPictureForm.IsFixed();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The first form from this document is fixed: " + bFixed);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "IsFixed.docx");
builder.CloseFile();