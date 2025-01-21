// This example clears the contents from the content control.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
inlineLvlSdt.AddText("This is an inline text content control.");
inlineLvlSdt.RemoveAllElements();
inlineLvlSdt.AddText("We removed all the inline content control elements.");