// Fill the text of a run with a solid color in a document.

// How do I apply a solid color fill to the characters of a text run in a document?

// Color the text itself using a fill rather than a simple color property in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is a text run with the font color set to orange.");
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
run.SetFill(fill);
paragraph.AddElement(run);