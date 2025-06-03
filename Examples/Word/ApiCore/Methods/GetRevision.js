// This example demonstrates how to get the revision of the current document.

const document = Api.GetDocument();
const core = document.GetCore();
core.SetRevision("Rev. A");

const revision = core.GetRevision();
let paragraph = document.GetElement(0);
paragraph.AddText("Revision: " + revision);
