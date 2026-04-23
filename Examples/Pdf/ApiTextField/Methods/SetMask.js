// Require text input to follow a specific pattern in a PDF text field.

// How do I enforce a phone number or ID format when users type in a PDF?

// Set an input pattern that users must follow in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetMask("(999)999-9999");
textField.SetValue("(123)456-7890");