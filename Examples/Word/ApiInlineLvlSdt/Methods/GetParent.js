// Access the element that directly contains an inline content control.

// The parent is the paragraph that directly contains the inline content control.

// Navigate from an inline content control up to its parent paragraph and make it bold.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineSdt = Api.CreateInlineLvlSdt();
inlineSdt.AddText("Inline control");
paragraph.AddInlineLvlSdt(inlineSdt);
let parent = inlineSdt.GetParent();
parent.SetBold(true);
