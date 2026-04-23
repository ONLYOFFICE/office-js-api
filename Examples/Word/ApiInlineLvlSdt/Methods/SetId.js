// Assign a unique identifier to an inline content control in a document.

// How do I give an inline content control a specific ID in a document?

// Tag a content control with a known ID so it can be retrieved by reference later in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
let run = Api.CreateRun();
run.AddText("This is an inline text content control with an ID set to it.");
inlineLvlSdt.AddElement(run, 0);
inlineLvlSdt.SetId("4815162342");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let contentControlId = inlineLvlSdt.GetId();
paragraph = Api.CreateParagraph();
paragraph.AddText("Id: " + contentControlId);
doc.Push(paragraph);