// This example shows how to get a shape in which the form is placed to control the position and size of the fixed size form frame.

// Get wrapper shape of the date form.

// Set outline to the shape which contains the current form.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.ToFixed(10 * 240, 2 * 240);
let shape = dateForm.GetWrapperShape();
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61)));
shape.SetOutLine(stroke);