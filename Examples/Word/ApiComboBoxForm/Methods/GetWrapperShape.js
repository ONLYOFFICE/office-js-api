// This example shows how to get a shape in which the form is placed to control the position and size of the fixed size form frame.

// How to get combobox form wrapper shape.

// Outline the shape containing a combobox.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
comboBoxForm.ToFixed(7 * 240, 2 * 240);
let shape = comboBoxForm.GetWrapperShape();
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61)));
shape.SetOutLine(stroke);