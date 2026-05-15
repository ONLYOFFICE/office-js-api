// Add a visual representation for a form field in a PDF.

// How do I create a visual instance of a form field in a PDF?

// Display a form field's widget at a specific location in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Example text');
textField.AddWidget(0, [10, 40, 160, 60]);