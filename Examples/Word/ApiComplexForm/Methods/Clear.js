// Clear the form.

// How can I clear using a complex form in a document?

// Clear for a complex form in a document.

let doc = Api.GetDocument()
let complexForm = Api.CreateComplexForm({"key": "Complex", "tip": "Insert here other forms", "required": true, "placeholder": "Complex form"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
let checkBox = Api.CreateCheckBoxForm()
checkBox.SetChecked(true);
complexForm.Add(checkBox);
complexForm.Clear();
doc.Push(paragraph);