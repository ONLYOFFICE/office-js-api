// This example demonstrates how to set the title of the current document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetTitle("My Document Title");

const title = core.GetTitle();
let paragraph = doc.GetElement(0);
paragraph.AddText("Title: " + title);
