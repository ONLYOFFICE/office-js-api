// Read the ID assigned to a date form in a document.

// Check the ID that was set for a date form with the SetId method in a document.

// Display the date form ID that is saved to the file and stays the same after the document is reopened.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.SetId(1001);
let formId = dateForm.GetId();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form ID: " + formId);
doc.Push(paragraph);