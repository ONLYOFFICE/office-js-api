// This example sets the text fill to the current text run.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
run.SetTextFill(fill);
run.AddText("This is a text run with the black text.");
paragraph.AddElement(run);