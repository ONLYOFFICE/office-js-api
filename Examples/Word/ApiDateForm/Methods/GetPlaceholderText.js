// Read the placeholder text displayed inside a date form in a document.

// How do I get the placeholder text shown in a date form in a document?

// Confirm the hint text after updating it to ensure it reflects the new value.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.SetPlaceholderText("08.13.2011");
let placeholderText = dateForm.GetPlaceholderText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Placeholder text: " + placeholderText);
doc.Push(paragraph);