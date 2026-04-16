// Get field by name in document.

// How can I get the field by name using a document in a PDF document?

// Get the field by name for a document in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetName('Text field 1');
textField = doc.GetFieldByName('Text field 1');
textField.SetValue('Example value');