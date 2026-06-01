// Check whether a form field is locked from editing in a PDF.

// How can I determine if a form field is read-only in a PDF?

// Verify the read-only status of a form field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Read only is: ' + textField.IsReadOnly());