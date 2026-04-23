// Read the identifier assigned to an inline content control in a document.

// How do I retrieve the ID of an inline content control in a document?

// Verify the custom ID set on an inline content control by printing it to the page in a document.

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