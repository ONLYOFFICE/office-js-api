// Delete a list item from a combo box content control in a document.

// How do I remove an entry from a dropdown or combo box control in a document?

// Trim the available choices in a combo box by removing an item that is no longer needed in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let contentControl = doc.AddComboBoxContentControl();
let paragraph1 = Api.CreateParagraph();
contentControl.AddListItem('one', '1');
contentControl.AddListItem('two', '2');
contentControl.SelectListItem('2');
contentControl.RemoveListItem('1');