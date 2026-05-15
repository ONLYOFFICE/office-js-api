// Apply a full set of text formatting properties to a selected range in a document.

// How do I copy formatting settings from one place and stamp them onto a text range in a document?

// Transfer font style, size, and other attributes onto a chosen portion of text in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let textPr = paragraph.GetTextPr();
textPr.SetItalic(true);
let range = doc.GetRange(0, 24);
range.SetTextPr(textPr);