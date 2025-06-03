// This example demonstrates how to set the language of the current document using the ApiCore.

const document = Api.GetDocument();
const core = document.GetCore();
core.SetLanguage("en-US");

const language = core.GetLanguage();
let paragraph = document.GetElement(0);
paragraph.AddText("Language: " + language);
