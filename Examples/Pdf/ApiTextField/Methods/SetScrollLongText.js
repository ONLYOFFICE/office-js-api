// Prevent text from scrolling beyond the field width in a PDF.

// How do I prevent scrolling in a narrow text field in a PDF?

// Disable scrolling for text that overflows the field boundary in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetScrollLongText(false);
textField.SetValue('Scroll long text property is: ' + textField.IsScrollLongText());