// This example shows how to get a shape in which the form is placed to control the position and size of the fixed size form frame.
let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex1"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
complexForm.ToFixed(7 * 240, 2 * 240);
let shape = complexForm.GetWrapperShape();
shape.SetHorPosition("page", 50 * 36000);
shape.SetVerPosition("page", 50 * 36000);