// Get and set the radio button group selection using the GroupValue property.

// The GroupValue property provides direct read/write access to the selected radio button choice name.

// Create a radio button group, assign a selection via the property setter, then read it back.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let radio1 = Api.CreateCheckBoxForm({"tip": "Select your response", "required": true, "placeholder": "Response", "radio": true});
radio1.SetRadioGroup("Response");
radio1.SetChoiceName("Yes");
paragraph.AddElement(radio1);
paragraph.AddText(" Yes");
paragraph.AddLineBreak();
let radio2 = Api.CreateCheckBoxForm({"tip": "Select your response", "required": true, "placeholder": "Response", "radio": true});
radio2.SetRadioGroup("Response");
radio2.SetChoiceName("No");
paragraph.AddElement(radio2);
paragraph.AddText(" No");
radio1.GroupValue = "Yes";
let groupValue = radio1.GroupValue;
paragraph = Api.CreateParagraph();
paragraph.AddText("Selected option: " + groupValue);
doc.Push(paragraph);
