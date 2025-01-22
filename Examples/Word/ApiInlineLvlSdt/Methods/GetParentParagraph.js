// This example shows how to get a paragraph that contains the content control.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a parent paragraph. ");
let inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.AddText("This is an inline text content control added to the paragraph.");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let parentParagraph = inlineLvlSdt.GetParentParagraph();
parentParagraph.SetBold(true);