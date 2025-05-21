// This example shows how to set the checkbox value of an inline content control.
let doc = Api.GetDocument();
let inlineControl = doc.AddCheckBoxContentControl();
inlineControl.SetCheckBoxChecked(true);