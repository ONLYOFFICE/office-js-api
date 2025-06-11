// This example demonstrates how to get the content status of the current document using the ApiCore.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetContentStatus("Final");

const contentStatus = core.GetContentStatus();
const paragraph = doc.GetElement(0);
paragraph.AddText("Content Status: " + contentStatus);
