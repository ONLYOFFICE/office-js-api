// This example sets the text outline to the current text run
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.AddText("This is a text run with the black text outline.");
let stroke = Api.CreateStroke(0.2 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
run.SetOutLine(stroke);
paragraph.AddElement(run);