// This example gets a class type and inserts it into the document.

// How to get a class type of ApiInlineLvlSdt.

// Retrieve class type of ApiInlineLvlSdt object and insert it to the document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let run = Api.CreateRun();
run.AddText("This is an inline text content control.");
inlineLvlSdt.AddElement(run, 0);
let classType = inlineLvlSdt.GetClassType();
paragraph.AddLineBreak();
paragraph.AddText("Class Type = " + classType);