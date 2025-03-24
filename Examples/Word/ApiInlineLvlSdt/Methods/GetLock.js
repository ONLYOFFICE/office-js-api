// This example shows hpw to get the lock type of the container.

// How to display the lock of the inline text control in the document.

// Set the lock type of the inline text element and print it.

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