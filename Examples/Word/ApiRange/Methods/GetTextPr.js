// Read the text formatting settings applied to a selected region in a document.

// How do I retrieve the styling details of a highlighted portion of text in a document?

// Capture the visual style of one selection and apply it to another region in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Welcome to ONLYOFFICE Document Builder");

// Get the text properties of the first range
let range1 = doc.GetRange(0, 31);
let textPr = range1.GetTextPr();

// Modify the text properties (e.g., set italic)
textPr.SetItalic(true);

// Apply the modified text properties to another range
let range2 = doc.GetRange(32, 63);
range2.SetTextPr(textPr);

// Add a new paragraph to confirm the changes
let newParagraph = Api.CreateParagraph();
newParagraph.AddText("This text is in italic as per the modified text properties.");
doc.Push(newParagraph);