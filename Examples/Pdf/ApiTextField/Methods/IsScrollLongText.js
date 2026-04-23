// Check if a text field scrolls text that exceeds its boundaries in a PDF.

// How do I know if long text will scroll instead of wrap in a text field in a PDF?

// Determine whether a text input allows scrolling for content larger than the field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetScrollLongText(true);
textField.SetValue('Scroll long text property is: ' + textField.IsScrollLongText());