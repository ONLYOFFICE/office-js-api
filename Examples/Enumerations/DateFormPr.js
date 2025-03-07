// This example creates a date form with the common and specific date form properties.

// How to create a date form with its properties.

// Create a property and apply it to the date form.

let dateFormPr = {"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"};
let dateForm = Api.CreateDateForm(dateFormPr);