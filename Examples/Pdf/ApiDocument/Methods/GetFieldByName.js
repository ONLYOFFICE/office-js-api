// Find a specific form field by its name in a PDF.

// How do I search for a field using its assigned name in a PDF?

// Retrieve a field and set its value by name in a PDF.

let doc = Api.GetDocument();
doc.AddPage();
let page = doc.GetPage(doc.GetPagesCount() - 1);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetFullName('Text field 1');
textField = doc.GetFieldByName('Text field 1');
textField.SetValue('Example value');
