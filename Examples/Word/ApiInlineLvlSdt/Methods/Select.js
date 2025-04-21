// This example shows how to select the content control.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
inlineLvlSdt.AddText("The inline text content control is selected.");
doc.AddElement(0, inlineLvlSdt);
inlineLvlSdt.Select();