// Check if the content control is a dropdown list in a document.

// How can I is drop down list using an inline content control in a document?

// Is drop down list for an inline content control in a document.

let doc = Api.GetDocument();
let inlineControl = doc.AddDropDownListContentControl();
let isDropDown = inlineControl.IsDropDownList();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Is this content control a dropdown list? " + isDropDown);
doc.Push(paragraph);