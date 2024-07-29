// This example showh how to get the data for all forms added to the document.
var oDocument = Api.GetDocument();
var oParagraph1 = oDocument.GetElement(0);
var oCheckBox = Api.CreateCheckBoxForm({key: "BestCompany"});
oCheckBox.SetChecked(true);
oParagraph1.Push(oCheckBox);
var oTextForm = Api.CreateTextForm({key: "CompanyName"});
oTextForm.SetText("OnlyOffice");
oParagraph1.Push(oTextForm);

var sText = JSON.stringify(oDocument.GetFormsData());
let oParagraph2 = Api.CreateParagraph();
oParagraph2.AddText(sText);
oDocument.Push(oParagraph2);
