// This example showh how to set data to forms.
var oDocument = Api.GetDocument();
var oParagraph1 = oDocument.GetElement(0);
var oCheckBox = Api.CreateCheckBoxForm({key: "BestCompany"});
oParagraph1.Push(oCheckBox);
var oTextForm = Api.CreateTextForm({key: "CompanyName"});
oParagraph1.Push(oTextForm);

oDocument.SetFormsData([
    {key: "BestCompany", value: true},
    {key: "CompanyName", value: "OnlyOffice"}
]);
