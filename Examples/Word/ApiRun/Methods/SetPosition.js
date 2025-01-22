// This example specifies an amount by which text is raised or lowered for this run in relation to the default baseline of the surrounding non-positioned text.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetPosition(10);
run.AddText("This is a text run with the text raised 5 points (10 half-points).");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetPosition(-16);
run.AddText("This is a text run with the text lowered 8 points (16 half-points).");
paragraph.AddElement(run);