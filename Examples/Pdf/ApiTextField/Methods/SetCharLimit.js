// Limit the number of characters that can be entered into a text field in a PDF.

// How do I prevent users from typing beyond a certain character count in a PDF?

// Control how many characters a text field will accept in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetCharLimit(20);
textField.SetValue('Char limit is: ' + textField.GetCharLimit());