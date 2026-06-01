// Add elements to a complex form in a document.

// How do I add form fields and static text to a complex form in a document?

// Build a multi-part entry field by combining a text input and a suffix label inside one form.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Email", "tip": "Email", "placeholder": "Start to fill complex form"});
complexForm.Add(Api.CreateTextForm());
complexForm.Add("@onlyoffice.com");
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);