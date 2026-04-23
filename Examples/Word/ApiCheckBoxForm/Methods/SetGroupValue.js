// Select a radio button in a group by setting the group value in a document.

// The SetGroupValue method changes which radio button is selected across all buttons in the same group.

// Create two radio buttons in the same group, then select one using SetGroupValue.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let radio1 = Api.CreateCheckBoxForm({"tip": "Select your gender", "required": true, "placeholder": "Gender", "radio": true});
radio1.SetRadioGroup("Gender");
radio1.SetChoiceName("Male");
paragraph.AddElement(radio1);
paragraph.AddText(" Male");
paragraph.AddLineBreak();
let radio2 = Api.CreateCheckBoxForm({"tip": "Select your gender", "required": true, "placeholder": "Gender", "radio": true});
radio2.SetRadioGroup("Gender");
radio2.SetChoiceName("Female");
paragraph.AddElement(radio2);
paragraph.AddText(" Female");
radio1.SetGroupValue("Female");
