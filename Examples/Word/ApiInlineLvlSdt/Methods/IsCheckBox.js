// This example shows how to check if a content control is a checkbox.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let contentControl = doc.AddCheckBoxContentControl();
let paragraph1 = Api.CreateParagraph();
paragraph1.AddText(contentControl.IsCheckBox()
    ? "content control is checkbox"
    : "content control isn't checkbox"
);
doc.AddElement(1, paragraph1);