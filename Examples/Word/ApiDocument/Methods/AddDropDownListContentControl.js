// This example shows how to add a dropdown list content control.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
doc.AddDropDownListContentControl();
paragraph.AddText("DropDownList content control");