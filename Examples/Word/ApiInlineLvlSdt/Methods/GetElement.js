// Retrieve a specific element from an inline text content control by position in a document.

// How do I get a single element from an inline content control in a document?

// Bold a chosen run inside an inline content control to distinguish it from the rest in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
for (let i = 0; i < 10; ++i) {
	let run = Api.CreateRun();
	run.AddText("This is text run " + (i + 1) + ". ");
	inlineLvlSdt.AddElement(run);
}
let changeRun = inlineLvlSdt.GetElement(4);
changeRun.SetBold(true);
paragraph.AddLineBreak();
paragraph.AddLineBreak();
paragraph.AddLineBreak();
paragraph.AddText("We added 10 text runs to the above inline text content control. Then we changed the fifth run, so it is different from the others.");