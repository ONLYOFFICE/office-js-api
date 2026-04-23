// Read the lock type applied to an inline content control in a document.

// How do I check the lock setting of an inline content control in a document?

// Confirm a content lock by setting it on an inline control and printing the result in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
let run = Api.CreateRun();
run.AddText("This is an inline text content control with the content lock set to it.");
inlineLvlSdt.AddElement(run, 0);
inlineLvlSdt.SetLock("sdtContentLocked");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let lock = inlineLvlSdt.GetLock();
paragraph = Api.CreateParagraph();
paragraph.AddText("Lock type: " + lock);
doc.Push(paragraph);