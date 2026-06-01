// Append multiple text runs to a paragraph in a document.

// How do I add several runs to the end of a paragraph in a document?

// Build a paragraph by pushing new text runs one by one in a document.

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