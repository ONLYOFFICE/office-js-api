// This example shows how to get the form tag.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let complexForm = Api.CreateComplexForm({"key": "Complex1", "tag": "Custom tag"});
paragraph.AddElement(complexForm);
let tag = complexForm.GetTag();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form tag: " + tag);
doc.Push(paragraph);