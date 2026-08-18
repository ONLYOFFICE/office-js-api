// Add Unicode code points with exact character widths to a text run in a document.

// How do I insert characters preserving their exact widths into a text run in a document?

// Fill a text run with the "Widths" word so that every character keeps the width specified in millimeters.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText([87, 105, 100, 116, 104, 115], [5, 3, 4, 3, 4, 3]);
paragraph.AddElement(run);
