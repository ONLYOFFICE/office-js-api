// This example demonstrates how to get the keywords of the current document using the ApiCore.

const document = Api.GetDocument();
const core = document.GetCore();
core.SetKeywords("Example; ApiCore; Document");

const keywords = core.GetKeywords();
let paragraph = document.GetElement(0);
paragraph.AddText("Keywords: " + keywords);
