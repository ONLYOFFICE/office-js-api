// This example shows how to get the text from the form.
let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex1"});
complexForm.Add(Api.CreateTextForm({"placeholder" : "username"}));
complexForm.Add("@onlyoffice.com");
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
let text = complexForm.GetText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form text: " + text);
doc.Push(paragraph);