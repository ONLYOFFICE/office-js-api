// This example shows how to get a list of all the content controls from the document.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let run = Api.CreateRun();
run.AddText("This is an inline text content control.");
inlineLvlSdt.AddElement(run, 0);
let contentControls = document.GetAllContentControls();
contentControls[0].GetElement(0).SetBold(true);
let classType = contentControls[0].GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
document.Push(paragraph);