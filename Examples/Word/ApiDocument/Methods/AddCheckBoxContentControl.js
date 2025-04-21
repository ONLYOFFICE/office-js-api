// This example shows how to add a checkbox content control.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
doc.AddCheckBoxContentControl();
paragraph.AddText("Checkbox content control");