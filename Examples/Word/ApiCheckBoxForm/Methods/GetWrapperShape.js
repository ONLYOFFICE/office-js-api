// This example shows how to get a shape in which the form is placed to control the position and size of the fixed size form frame.

// Get wrapper shape of the checkbox form.

// Set outline to the shape which contains the current form.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Married");
checkBoxForm.ToFixed(1 * 240, 1 * 240);
let shape = checkBoxForm.GetWrapperShape();
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61)));
shape.SetOutLine(stroke);
paragraph.AddLineBreak();
checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Single");
checkBoxForm.ToFixed(1 * 240, 1 * 240);
shape = checkBoxForm.GetWrapperShape();
stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61)));
shape.SetOutLine(stroke);