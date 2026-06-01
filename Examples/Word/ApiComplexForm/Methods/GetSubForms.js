// Collect all sub-forms contained within a complex form in a document.

// How do I access each individual sub-form inside a complex form in a document?

// Count or iterate over the sub-forms of a complex form to process them separately in a document.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Email", "tip": "Email", "placeholder": "Start to fill complex form"});
complexForm.Add(Api.CreateTextForm({"placeholder" : "username"}));
complexForm.Add("@");
let comboBox = Api.CreateComboBoxForm({"editable" : false, "placeholder" : "mail.com"});
comboBox.SetListValues(["onlyoffice.com", "gmail.com", "hotmail.com"]);
complexForm.Add(comboBox);
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
paragraph.AddLineBreak();
let subForms = complexForm.GetSubForms();
paragraph.AddText("Number of subforms: " + subForms.length);