// This example sets the alias attribute to the container.

// How to set a "№1" alias to the inline content control.

// Display the alias set for inline text element.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
let run = Api.CreateRun();
run.AddText("This is an inline text content control with alias '№1'.");
inlineLvlSdt.AddElement(run, 0);
inlineLvlSdt.SetAlias("№1");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let alias = inlineLvlSdt.GetAlias();
paragraph = Api.CreateParagraph();
paragraph.AddText("Alias: " + alias);
doc.Push(paragraph);