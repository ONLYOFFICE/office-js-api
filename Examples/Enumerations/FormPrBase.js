// This example creates a text form with the common form properties.

// How to create a text form using its base properties.

// Create a base property and apply it to the text form.

let formPrBase = {"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name"};
let textForm = Api.CreateTextForm(formPrBase);