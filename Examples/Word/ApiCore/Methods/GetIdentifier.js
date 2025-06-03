// This example demonstrates how to get the identifier of the current document using the ApiCore.

const document = Api.GetDocument();
const core = document.GetCore();
core.SetIdentifier("#ID42");

const identifier = core.GetIdentifier();
let paragraph = document.GetElement(0);
paragraph.AddText("Identifier: " + identifier);
