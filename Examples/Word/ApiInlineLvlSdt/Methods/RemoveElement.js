// Remove a specific element by index from an inline content control in a document.

// How do I delete one run from an inline content control at a given position in a document?

// Drop an unwanted run from a content control by its position when editing inline text in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let run1 = Api.CreateRun();
run1.AddText("This is the first text run in the inline text content control.");
inlineLvlSdt.AddElement(run1, 0);
let run2 = Api.CreateRun();
run2.AddText("This is the second text run in the inline text content control. The first text run was removed.");
inlineLvlSdt.AddElement(run2, 1);
inlineLvlSdt.RemoveElement(0);