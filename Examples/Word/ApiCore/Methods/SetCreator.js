// This example demonstrates how to set the creator of the current document using the ApiCore.

const document = Api.GetDocument();
const core = document.GetCore();
core.SetCreator("John Smith");

const creator = core.GetCreator();
const paragraph = document.GetElement(0);
paragraph.AddText("Creator: " + creator);
	