// This example demonstrates how to get the date when the current document was last modified.

const document = Api.GetDocument();
const core = document.GetCore();
core.SetModified(new Date('1990-03-10'));

const lastModifiedDate = core.GetModified().toDateString();
let paragraph = document.GetElement(0);
paragraph.AddText("Last modified: " + lastModifiedDate);
