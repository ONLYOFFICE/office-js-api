// Move the cursor to the start of a hyperlink in a document.

// Text entered at this position becomes part of the hyperlink.

// Complete the hyperlink text by adding a word before it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("website");
let hyperlink = paragraph.AddHyperlink("https://www.onlyoffice.com", "ONLYOFFICE website");
hyperlink.MoveCursorToStart();
doc.EnterText("ONLYOFFICE ");
