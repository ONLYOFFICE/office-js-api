// This example demonstrates how to get the content status of the current document using the ApiCore.

const document = Api.GetDocument();
const core = document.GetCore();
core.SetContentStatus("Final");

const contentStatus = core.GetContentStatus();
const paragraph = document.GetElement(0);
paragraph.AddText("Content Status: " + contentStatus);
