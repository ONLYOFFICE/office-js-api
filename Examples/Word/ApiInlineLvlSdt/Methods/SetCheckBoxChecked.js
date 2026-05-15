// Mark a checkbox content control as checked in a document.

// How do I programmatically check or uncheck a checkbox control in a document?

// Pre-fill a form by setting a checkbox to its checked state before the user opens it in a document.

let doc = Api.GetDocument();
let inlineControl = doc.AddCheckBoxContentControl();
inlineControl.SetCheckBoxChecked(true);