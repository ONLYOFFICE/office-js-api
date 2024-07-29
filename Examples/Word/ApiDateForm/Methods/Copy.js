// This example copies the form.
var oDocument = Api.GetDocument();
var oDateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
oDateForm.SetTime(new Date().getTime());
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oDateForm);
var oCopyDateForm = oDateForm.Copy();
oParagraph.AddLineBreak();
oParagraph.AddElement(oCopyDateForm);