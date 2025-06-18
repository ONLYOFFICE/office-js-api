// This example clears the form.
let doc = Api.GetDocument()
let complexForm = Api.CreateComplexForm({"key": "Complex", "tip": "Insert here other forms", "required": true, "placeholder": "Complex form"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
let checkBox = Api.CreateCheckBoxForm()
checkBox.SetChecked(true);
complexForm.Add(checkBox);
complexForm.Clear();
doc.Push(paragraph);