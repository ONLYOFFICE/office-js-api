// This example shows how to create a checkbox content control.
let doc = Api.GetDocument();
let cc = Api.CreateContentControlCheckBox({Checked: true});
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddInlineLvlSdt(cc);
doc.Push(infoParagraph);