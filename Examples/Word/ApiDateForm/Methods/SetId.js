// Assign a unique ID to a date form in a document.

// Set a custom ID for a date form to tell it apart from other forms in a document.

// Give a date form an ID that is saved to the file, unlike the internal ID which can change after reopening.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.SetId(1001);
let formId = dateForm.GetId();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form ID: " + formId);
doc.Push(paragraph);