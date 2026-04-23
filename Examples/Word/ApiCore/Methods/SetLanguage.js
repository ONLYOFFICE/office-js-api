// Set the language for the current document in a document.

// How do I assign a language tag to a document?

// Specify a locale code to control language settings for spell-check and proofing tools in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetLanguage("en-US");

const language = core.GetLanguage();
let paragraph = doc.GetElement(0);
paragraph.AddText("Language: " + language);