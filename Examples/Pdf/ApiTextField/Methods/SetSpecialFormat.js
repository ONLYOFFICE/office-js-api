// Apply predefined formats like phone numbers to text fields in a PDF.

// How do I automatically format phone numbers and social security numbers in a PDF?

// Use built-in formats to style user input in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetSpecialFormat("phone");
textField.SetValue("1234567890");