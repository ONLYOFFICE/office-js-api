// Read the language setting stored in the core properties of a document.

// How do I get the language value from the core properties in a document?

// Detect the declared locale of a document to apply the correct spell-check or formatting rules in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetLanguage("en-US");

const language = core.GetLanguage();
let paragraph = doc.GetElement(0);
paragraph.AddText("Language: " + language);