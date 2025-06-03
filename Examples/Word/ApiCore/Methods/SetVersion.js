// This example demonstrates how to set the version of the current document.

const document = Api.GetDocument();
const core = document.GetCore();
core.SetVersion("v9.0");

const version = core.GetVersion();
let paragraph = document.GetElement(0);
paragraph.AddText("Version: " + version);
