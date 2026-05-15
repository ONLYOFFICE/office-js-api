// Apply a border color to an inline content control in a document.

// How do I change the border color of an inline content control in a document?

// Distinguish a content control from surrounding text by giving its border a distinct color in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
let run = Api.CreateRun();
run.AddText("This is an inline text content control with blue border.");
inlineLvlSdt.AddElement(run, 0);
inlineLvlSdt.SetBorderColor(Api.HexColor('#0000FF'));
paragraph.AddInlineLvlSdt(inlineLvlSdt);