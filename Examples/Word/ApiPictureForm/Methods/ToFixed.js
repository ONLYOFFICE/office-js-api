// This example converts the current form to a fixed size form.
var oDocument = Api.GetDocument();
var oPictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
oPictureForm.SetImage("https://api.onlyoffice.com/content/img/docbuilder/examples/user-profile.png");
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oPictureForm);
oPictureForm.ToFixed(10 * 240, 10 * 240);
var bFixed = oPictureForm.IsFixed();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The first form from this document has a fixed size: " + bFixed);
oDocument.Push(oParagraph);