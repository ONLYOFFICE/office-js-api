// This example shows how to create a checkbox content control.
let doc = Api.GetDocument();
let cc = Api.CreateCheckBoxContentControl({checked: true});
let paragraph = Api.CreateParagraph();
paragraph.Push(cc);
doc.Push(paragraph);