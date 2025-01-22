// This example wraps a run in a mail merge field.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("Name");
paragraph.AddElement(run);
run.WrapInMailMergeField();
paragraph.AddLineBreak();
run = Api.CreateRun();
run.AddText("Surname");
paragraph.AddElement(run);
run.WrapInMailMergeField();