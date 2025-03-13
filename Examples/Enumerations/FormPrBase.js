// This example creates a text form with the common form properties.

// How to create a text form using its base properties.

// Create the base properties and apply them to the ApiTextForm object.

let formPrBase = {"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name"};
let textForm = Api.CreateTextForm(formPrBase);