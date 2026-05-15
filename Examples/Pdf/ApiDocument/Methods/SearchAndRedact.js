// Find and hide sensitive text in a PDF.

// How do I black out certain words throughout a PDF?

// Search for a word and apply redaction to all matches in a PDF.

let doc = Api.GetDocument();
doc.SearchAndRedact({text: "Lorem", matchCase: false, wholeWords: false});
doc.ApplyRedact();
console.log(`We searched for the word lorem in the document and applied redact annotation to all matches.`);