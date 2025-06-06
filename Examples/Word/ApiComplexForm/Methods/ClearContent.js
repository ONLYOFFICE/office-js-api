// This example clear content of complex form.
let doc = Api.GetDocument()
let complexForm = Api.CreateComplexForm({"key": "Complex", "tip": "Insert here other forms", "required": true, "placeholder": "Complex form"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
let checkBox = Api.CreateCheckBoxForm();
complexForm.InsertForm(checkBox);
complexForm.ClearContent();
doc.Push(paragraph);