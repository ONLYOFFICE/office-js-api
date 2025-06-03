// This example demonstrates how to set the title of the current document.

const document = Api.GetDocument();
const core = document.GetCore();
core.SetTitle("My Document Title");

const title = core.GetTitle();
let paragraph = document.GetElement(0);
paragraph.AddText("Title: " + title);
