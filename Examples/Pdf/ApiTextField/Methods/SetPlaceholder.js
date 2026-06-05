// Add a hint text that appears before you type in a text field in a PDF.

// How do I add a hint text to an empty text field in a PDF?

// Configure what example text shows when a text field is empty in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetPlaceholder("Your text here");
