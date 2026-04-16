// Set the ID for the container in a document.

// How do I set id in a document?

// Set id using an inline content control object in a document.

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