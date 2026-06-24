// Retrieve the validation pattern from a text field in a PDF.

// Useful for accessing the validation pattern from a text field in a PDF.

// Display what text pattern is required for a text field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetRegularExp("\\S+@\\S+\\.\\S+");
textField.SetValue('Text field reg exp is: "' + textField.GetRegularExp() + '"');
