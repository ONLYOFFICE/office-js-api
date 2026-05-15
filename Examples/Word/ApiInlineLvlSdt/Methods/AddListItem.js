// Add items to a combobox content control and select one in a document.

// How do I populate a combobox content control with list items in a document?

// Build a dropdown list inside a content control and set its active value in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let contentControl = doc.AddComboBoxContentControl();
let paragraph1 = Api.CreateParagraph();
contentControl.AddListItem('one', '1');
contentControl.AddListItem('two', '2');
contentControl.SelectListItem('2');