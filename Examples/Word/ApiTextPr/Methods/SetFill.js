// Fill the default text characters with a solid color in a document.

// How do I apply a color fill to text in a document?

// Paint the default font with an orange solid fill so the text stands out visually in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let textPr = doc.GetDefaultTextPr();
textPr.SetFill(fill);
paragraph.AddText("This is a text run with the font color set to orange.");
paragraph.SetTextPr(textPr);