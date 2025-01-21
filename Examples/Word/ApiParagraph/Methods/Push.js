// This example adds a oRun to the paragraph.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is run #0, you must not push it to take effect.");
paragraph.AddElement(run);
paragraph.AddLineBreak();
for (let i = 0; i < 5; ++i) {
	run = Api.CreateRun();
	run.AddText("This is run #" + (i + 1) + ", you must push it to take effect.");
	paragraph.AddLineBreak();
	paragraph.Push(run);
}