// This example shows how to get the date format from a date form.
var oDocument = Api.GetDocument();
var oDateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oDateForm);
oDateForm.SetFormat("dddd, dd MMMM yyyy");
var sFormat = oDateForm.GetFormat();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The first date form from this document has format: " + sFormat);
oDocument.Push(oParagraph);