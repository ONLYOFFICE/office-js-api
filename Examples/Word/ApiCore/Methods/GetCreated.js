// This example demonstrates how to get the creation date of the current document.

const document = Api.GetDocument();
const core = document.GetCore();
core.SetCreated(new Date('20 January 2000'));

const createdDate = core.GetCreated().toDateString();
let paragraph = document.GetElement(0);
paragraph.AddText("Created: " + createdDate);
