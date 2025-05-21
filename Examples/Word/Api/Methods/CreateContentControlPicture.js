// This example shows how to create a picture content control.
let doc = Api.GetDocument();
let cc = Api.CreateContentControlPicture(2000000, 2000000);
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddInlineLvlSdt(cc);
doc.Push(infoParagraph);