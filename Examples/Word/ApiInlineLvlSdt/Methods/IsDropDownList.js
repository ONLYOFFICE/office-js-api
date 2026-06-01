// Determine whether an inline content control is a dropdown list in a document.

// How do I check whether a content control is a dropdown list in a document?

// Distinguish a dropdown list from combo boxes or text controls before reading its selected option in a document.

let doc = Api.GetDocument();
let inlineControl = doc.AddDropDownListContentControl();
let isDropDown = inlineControl.IsDropDownList();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Is this content control a dropdown list? " + isDropDown);
doc.Push(paragraph);