// This example demonstrates how to get the name of the last user who modified the current document.

const document = Api.GetDocument();
const core = document.GetCore();
core.SetLastModifiedBy("Mark Pottato");

const lastModifiedBy = core.GetLastModifiedBy();
let paragraph = document.GetElement(0);
paragraph.AddText("Last modified by: " + lastModifiedBy);
