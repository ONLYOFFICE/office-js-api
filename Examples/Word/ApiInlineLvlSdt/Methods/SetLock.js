// Lock the content of an inline text content control in a document.

// How do I prevent users from editing the content of an inline content control in a document?

// Verify the active lock type on a content control by reading it back in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let run = Api.CreateRun();
run.AddText("This is an inline text content control with the content lock set to it.");
inlineLvlSdt.SetLock("sdtContentLocked");
inlineLvlSdt.AddElement(run, 0);
let lock = inlineLvlSdt.GetLock();
paragraph = Api.CreateParagraph();
paragraph.AddText("Lock type: " + lock);
doc.Push(paragraph);