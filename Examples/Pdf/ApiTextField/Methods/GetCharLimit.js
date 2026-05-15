// Check the maximum character limit for a text field in a PDF.

// How do I find out how many characters a text field accepts in a PDF?

// Read the character limit restriction of a text input field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetCharLimit(20);
textField.SetValue('Char limit is: ' + textField.GetCharLimit());