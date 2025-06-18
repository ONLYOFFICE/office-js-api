// This example showh how to get the data for all forms added to the document.

// How to get form information as a string.

// Display the form data in the document.

let doc = Api.GetDocument();
let paragraph1 = doc.GetElement(0);
let checkBox = Api.CreateCheckBoxForm({key: "BestCompany"});
checkBox.SetChecked(true);
paragraph1.Push(checkBox);
let textForm = Api.CreateTextForm({key: "CompanyName"});
textForm.SetText("OnlyOffice");
paragraph1.Push(textForm);

let text = JSON.stringify(doc.GetFormsData());
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText(text);
doc.Push(paragraph2);
