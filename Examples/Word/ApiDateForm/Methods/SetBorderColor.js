// This example sets the border color to the current form.

// Applies an orange border (RGB: 255, 111, 61) to highlight the date form form visually.

// Define the border color of the date form.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.SetBorderColor(255, 111, 61);