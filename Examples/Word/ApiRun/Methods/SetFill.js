// This example sets the text color to the current text run.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is a text run with the font color set to orange.");
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
run.SetFill(fill);
paragraph.AddElement(run);