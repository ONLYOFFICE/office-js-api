// Move the cursor to the end of a hyperlink in a document.

// Text entered at this position becomes part of the hyperlink.

// Complete the hyperlink text by adding words after it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE");
let hyperlink = paragraph.AddHyperlink("https://api.onlyoffice.com", "ONLYOFFICE for developers");
hyperlink.MoveCursorToEnd();
doc.EnterText(" for developers");
