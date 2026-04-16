// Get text field and set number format for it and then clear format.

// How can I clear format using a text field in a PDF document?

// Clear format for a text field in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetNumberFormat(0, "us", "black-minus", "$", true);
textField.SetValue('-1000');
textField.ClearFormat();