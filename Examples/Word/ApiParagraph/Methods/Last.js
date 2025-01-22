// This example shows how to get the last element of the paragraph which is not empty.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run1 = Api.CreateRun();
run1.AddText("This is an Run with text. ");
paragraph.Push(run1);
let run2 = Api.CreateRun();
run2.AddText("And this is the last Run in the paragraph.");
paragraph.Push(run2);
let lastRun = paragraph.Last();
lastRun.SetBold(true);