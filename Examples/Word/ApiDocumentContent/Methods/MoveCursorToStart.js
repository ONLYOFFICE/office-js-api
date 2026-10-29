// Move the cursor to the start of the header content in a document.

// The method works for any document content, such as a header, footer, footnote, table cell or shape content.

// Insert a label before the existing header text.

let doc = Api.GetDocument();
let section = doc.GetFinalSection();
let header = section.GetHeader("default", true);
header.GetElement(0).AddText("ONLYOFFICE Document Builder");
header.MoveCursorToStart();
doc.EnterText("Header: ");
