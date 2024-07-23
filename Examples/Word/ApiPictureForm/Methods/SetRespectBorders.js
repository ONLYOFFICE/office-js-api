// This example respects the form border width when scaling the image.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oPictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "shiftX": 50, "shiftY": 50});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oPictureForm);
oPictureForm.SetImage("https://api.onlyoffice.com/content/img/docbuilder/examples/user-profile.png");
oPictureForm.SetRespectBorders(true);
var bRespectBorders = oPictureForm.IsRespectBorders();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The borders of the first picture form in this document are respected when scaling the image: " + bRespectBorders);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetRespectBorders.docx");
builder.CloseFile();