// Search some word in document and add a redact annotation to it.

// How can I search and redact using a document in a PDF document?

// Search and redact for a document in a PDF document.

let doc = Api.GetDocument();
doc.SearchAndRedact({text: "Lorem", matchCase: false, wholeWords: false});
doc.ApplyRedact();
console.log(`We searched for the word lorem in the document and applied redact annotation to all matches.`);