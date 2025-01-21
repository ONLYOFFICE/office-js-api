// This example shows how to set data to forms.
let document = Api.GetDocument();
let paragraph1 = document.GetElement(0);
let checkBox = Api.CreateCheckBoxForm({key: "BestCompany"});
paragraph1.Push(checkBox);
let textForm = Api.CreateTextForm({key: "CompanyName"});
paragraph1.Push(textForm);

document.SetFormsData([
    {key: "BestCompany", value: true},
    {key: "CompanyName", value: "OnlyOffice"}
]);
