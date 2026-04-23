// Read the tag assigned to an inline content control in a document.

// How do I retrieve the tag value of an inline content control in a document?

// Verify that a previously assigned tag is stored and accessible on a content control in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
let run = Api.CreateRun();
run.AddText("This is an inline text content control with a tag set to it.");
inlineLvlSdt.AddElement(run, 0);
inlineLvlSdt.SetTag("This is a tag");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let tag = inlineLvlSdt.GetTag();
paragraph = Api.CreateParagraph();
paragraph.AddText("Tag: " + tag);
doc.Push(paragraph);