// Mark a form field as required in a PDF.

// How do I make a form field required in a PDF?

// Check whether a field is marked as required in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetRequired(true);
textField.SetValue('Required: ' + textField.IsRequired());