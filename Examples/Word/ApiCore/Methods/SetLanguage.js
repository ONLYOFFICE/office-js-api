// Set the language of the current document using the core properties in a document.

// How can I set language using a core properties in a document?

// Set language for a core properties in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetLanguage("en-US");

const language = core.GetLanguage();
let paragraph = doc.GetElement(0);
paragraph.AddText("Language: " + language);