// Create a checkbox content control in a document.

// How can I create the check box content control in a document?

// Create the check box content control in a document.

let doc = Api.GetDocument();
let cc = Api.CreateCheckBoxContentControl({checked: true});
let paragraph = Api.CreateParagraph();
paragraph.Push(cc);
doc.Push(paragraph);