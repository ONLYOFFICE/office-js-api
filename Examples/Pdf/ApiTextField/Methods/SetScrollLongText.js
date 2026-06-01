// Let text scroll horizontally when it exceeds the field width in a PDF.

// How do I make a narrow text field scrollable for longer content in a PDF?

// Enable scrolling for text that overflows the field boundary in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetScrollLongText(true);
textField.SetValue('Scroll long text property is: ' + textField.IsScrollLongText());