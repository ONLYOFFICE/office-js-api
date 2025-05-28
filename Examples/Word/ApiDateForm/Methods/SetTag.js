// This example shows how to set the form tag.
let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"tag" : "Hello", "key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.SetTag("DateTime");
let tag = dateForm.GetTag();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form tag: " + tag);
doc.Push(paragraph);