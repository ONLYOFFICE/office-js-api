// Enter text into a form field in a PDF.

// How do I fill in a form field in a PDF?

// Set a text value for a form field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Name Surname');