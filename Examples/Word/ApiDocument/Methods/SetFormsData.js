// Populate form fields with data values using their keys in a document.

// How do I fill in form fields programmatically in a document?

// Pre-fill checkboxes and text fields by matching each field's key to a corresponding value.

let doc = Api.GetDocument();
let paragraph1 = doc.GetElement(0);
let checkBox = Api.CreateCheckBoxForm({key: "BestCompany"});
paragraph1.Push(checkBox);
let textForm = Api.CreateTextForm({key: "CompanyName"});
paragraph1.Push(textForm);

doc.SetFormsData([
    {key: "BestCompany", value: true},
    {key: "CompanyName", value: "OnlyOffice"}
]);