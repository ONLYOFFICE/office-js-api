// This example specifies if the form should be required.
let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex1"});
complexForm.SetRequired(true);
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
