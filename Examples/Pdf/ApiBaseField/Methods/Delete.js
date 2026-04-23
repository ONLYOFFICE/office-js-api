// Remove a form field from a PDF.

// How do I delete a form field from a PDF?

// Remove a field and all its associated widgets from a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Example text');
textField.AddWidget(0, [10, 40, 160, 60]);
textField.Delete();