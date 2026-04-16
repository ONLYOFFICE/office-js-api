// Set the border color for the container in a document.

// How to set border color for an inline content control in a document?

// Set border color and display the result in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
let run = Api.CreateRun();
run.AddText("This is an inline text content control with blue border.");
inlineLvlSdt.AddElement(run, 0);
inlineLvlSdt.SetBorderColor(Api.HexColor('#0000FF'));
paragraph.AddInlineLvlSdt(inlineLvlSdt);