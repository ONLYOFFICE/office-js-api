// This example copies the form.
let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex1"});
complexForm.Add('Text');
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
let copyComplexForm = complexForm.Copy();
paragraph.AddLineBreak();
paragraph.AddElement(copyComplexForm);