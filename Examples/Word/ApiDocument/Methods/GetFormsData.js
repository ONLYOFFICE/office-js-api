// This example showh how to get the data for all forms added to the document.
let document = Api.GetDocument();
let paragraph1 = document.GetElement(0);
let checkBox = Api.CreateCheckBoxForm({key: "BestCompany"});
checkBox.SetChecked(true);
paragraph1.Push(checkBox);
let textForm = Api.CreateTextForm({key: "CompanyName"});
textForm.SetText("OnlyOffice");
paragraph1.Push(textForm);

let text = JSON.stringify(document.GetFormsData());
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText(text);
document.Push(paragraph2);
