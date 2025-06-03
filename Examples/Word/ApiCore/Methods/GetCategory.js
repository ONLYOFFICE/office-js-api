// This example demonstrates how to get the category of the document using the ApiCore.

const document = Api.GetDocument();
const core = document.GetCore();
core.SetCategory("Examples");

const category = core.GetCategory();
let paragraph = document.GetElement(0);
paragraph.AddText("Category: " + category);
