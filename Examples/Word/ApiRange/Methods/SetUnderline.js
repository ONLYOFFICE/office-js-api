// Specify that the contents of the current Range are displayed along with a line appearing directly below the character in a document.

// Underline the range in a document.

// Get a range and underline it with one line in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 24);
range.SetUnderline(true);