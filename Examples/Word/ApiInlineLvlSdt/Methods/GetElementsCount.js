// Count the elements inside an inline text content control in a document.

// How do I check how many elements an inline content control contains in a document?

// Track the element count of an inline content control as runs are added to it in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
paragraph.AddLineBreak();
let inlineLvlSdtCount = inlineLvlSdt.GetElementsCount();
paragraph.AddText("Number of elements in inlineLvlSdt (before adding anything) = " + inlineLvlSdtCount);
let run = Api.CreateRun();
run.AddText("This is an inline text content control. ");
inlineLvlSdt.AddElement(run, 0);
paragraph.AddLineBreak();
inlineLvlSdtCount = inlineLvlSdt.GetElementsCount();
paragraph.AddText("Number of elements in inlineLvlSdt (after adding one element) = " + inlineLvlSdtCount);
let run1 = Api.CreateRun();
run1.AddText("One more element of the inline text content control.");
inlineLvlSdt.AddElement(run1, 1);
inlineLvlSdtCount = inlineLvlSdt.GetElementsCount();
paragraph.AddLineBreak();
paragraph.AddText("Number of elements in inlineLvlSdt (after adding one more element) = " + inlineLvlSdtCount);