// Check whether a text field uses comb character spacing in a PDF.

// How do I know if a text field is set to display characters in separate boxes in a PDF?

// Verify if the comb format is enabled for a text input field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetCharLimit(12);
textField.SetComb(true);
textField.SetValue('Comb is:' + textField.IsComb());