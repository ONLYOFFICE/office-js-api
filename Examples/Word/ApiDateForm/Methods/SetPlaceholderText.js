// Set placeholder text on a date form in a document.

// How do I add hint text to an empty date form in a document?

// Replace the default prompt inside a date form with custom guidance text in a document.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.SetPlaceholderText("Your placeholder");