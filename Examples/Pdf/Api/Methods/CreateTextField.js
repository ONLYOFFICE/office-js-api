// How to create and add a text field to document.

// How do I create the text field in a PDF document?

// Create the text field and display the result in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);

let textField = Api.CreateTextField([10, 10, 160, 32]);
page.AddObject(textField);
textField.SetValue('This is the text field');