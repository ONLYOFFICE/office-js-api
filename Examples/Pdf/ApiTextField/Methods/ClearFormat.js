// Remove all formatting from a text input field in a PDF.

// How do I clear formatting that was applied to a text field in a PDF?

// Reset a text field to its default appearance without any special formatting in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetNumberFormat(0, "us", "black-minus", "$", true);
textField.SetValue('-1000');
textField.ClearFormat();