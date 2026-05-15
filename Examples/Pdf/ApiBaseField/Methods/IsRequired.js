// Check if a form field must be filled before submitting in a PDF.

// How can I determine if a form field is required in a PDF?

// Verify whether a form field must have a value in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Required: ' + textField.IsRequired());