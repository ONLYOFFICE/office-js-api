// Assign a named value to each radio button in a group so the selected option can be identified in a document.

// How do I label individual radio button choices in a grouped form in a document?

// Build a grouped set of radio buttons with distinct choice labels and retrieve the selected label in a document.

let doc = Api.GetDocument();

// Create first radio button
let checkBoxForm = Api.CreateCheckBoxForm({
    "tip": "Select your preferred contact method",
    "required": true,
    "placeholder": "Contact preference",
    "radio": true
});
checkBoxForm.SetRadioGroup("ContactPreference");
checkBoxForm.SetChoiceName("Email");
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Email");
paragraph.AddLineBreak();

// Create second radio button
checkBoxForm = Api.CreateCheckBoxForm({
    "tip": "Select your preferred contact method",
    "required": true,
    "placeholder": "Contact preference",
    "radio": true
});
checkBoxForm.SetRadioGroup("ContactPreference");
checkBoxForm.SetChoiceName("Phone");
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Phone");
paragraph.AddLineBreak();
checkBoxForm.SetChecked(true);

// Create third radio button
checkBoxForm = Api.CreateCheckBoxForm({
    "tip": "Select your preferred contact method",
    "required": true,
    "placeholder": "Contact preference",
    "radio": true
});
checkBoxForm.SetRadioGroup("ContactPreference");
checkBoxForm.SetChoiceName("Mail");
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Mail");

// Find the selected radio button and display the choice name
let radioGroup = checkBoxForm.GetRadioGroup();
paragraph = Api.CreateParagraph();
doc.GetAllForms().forEach(form => {
    if ("ContactPreference" === form.GetRadioGroup() && form.IsChecked()) {
        let choiceName = form.GetChoiceName();
        paragraph.AddText("Selected option: " + choiceName);
    }
});
doc.Push(paragraph);