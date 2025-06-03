// This example demonstrates how to get the description of the current document using the ApiCore.

const document = Api.GetDocument();
const core = document.GetCore();
core.SetDescription("This is a sample document made to help fellow users understand how to use the ApiCore methods.");

const description = core.GetDescription();
let paragraph = document.GetElement(0);
paragraph.AddText("Description: " + description);
