// Find and modify the last text run inside a paragraph in a document.

// How do I access the final text run of a paragraph in a document?

// Append additional text to the last run of a multi-run paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
for (let i = 0; i < 5; ++i) {
	let run = Api.CreateRun();
	run.AddText("This run # " + (i + 1));
	paragraph.Push(run);
	paragraph.AddLineBreak();
}
let lastRun = paragraph.GetLastRunWithText();
lastRun.AddText(" Last run.");