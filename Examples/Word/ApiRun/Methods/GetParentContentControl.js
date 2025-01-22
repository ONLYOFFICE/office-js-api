// This example shows how to get a content control that contains the run.
let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let paragraph = Api.CreateParagraph();
let run = Api.CreateRun();
run.AddText("This is a block text content control.");
paragraph.Push(run);
blockLvlSdt.AddElement(paragraph, 0);
doc.AddElement(0, blockLvlSdt);
let contentControl = run.GetParentContentControl();
let classType = contentControl.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
doc.Push(paragraph);