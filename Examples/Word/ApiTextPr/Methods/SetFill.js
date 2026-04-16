// Set the text color to the current text run in a document.

// How to color a text object in a document.

// Create a text run object, add a color to it using RGB format.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let textPr = doc.GetDefaultTextPr();
textPr.SetFill(fill);
paragraph.AddText("This is a text run with the font color set to orange.");
paragraph.SetTextPr(textPr);