// Showh how to get the value of the specified form using a key.

// How do I get the form value by key in a document?

// Get the form value by key using a document object.

let doc = Api.GetDocument();
let paragraph1 = doc.GetElement(0);
let checkBox = Api.CreateCheckBoxForm({key: "BestCompany"});
checkBox.SetChecked(true);
paragraph1.Push(checkBox);
let textForm = Api.CreateTextForm({key: "CompanyName"});
textForm.SetText("OnlyOffice");
paragraph1.Push(textForm);

let paragraph = Api.CreateParagraph();
doc.Push(paragraph);
let formValue = doc.GetFormValueByKey("CompanyName");
paragraph.AddText("CompanyName: " + formValue);
paragraph.AddLineBreak();
formValue = doc.GetFormValueByKey("BestCompany");
paragraph.AddText("BestCompany: " + formValue);