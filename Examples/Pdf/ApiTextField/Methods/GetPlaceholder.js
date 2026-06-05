// Retrieve the placeholder text from a text field in a PDF.

// How do I read the hint text in a text field in a PDF?

// Access the placeholder message displayed in a text input field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetPlaceholder("Your text here");
textField.SetValue('Text field placeholder is: "' + textField.GetPlaceholder() + '"');
