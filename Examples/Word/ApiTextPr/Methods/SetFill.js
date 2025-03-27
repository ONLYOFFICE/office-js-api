// This example sets the text color to the current text run.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let textPr = doc.GetDefaultTextPr();
textPr.SetFill(fill);
paragraph.AddText("This is a text run with the font color set to orange.");
paragraph.SetTextPr(textPr);