// Choose an active list item in a combo box content control in a document.

// How do I set the selected value of a combo box or dropdown control in a document?

// Pick a specific entry by value to pre-fill a combo box for the user in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let contentControl = doc.AddComboBoxContentControl();
let paragraph1 = Api.CreateParagraph();
contentControl.AddListItem('one', '1');
contentControl.AddListItem('two', '2');
contentControl.SelectListItem('2');