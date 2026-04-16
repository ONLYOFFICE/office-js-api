// Set the subject of the current document in a document.

// How can I set subject using a core properties in a document?

// Set subject for a core properties in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetSubject("ApiCore Method Showcase");

const subject = core.GetSubject();
let paragraph = doc.GetElement(0);
paragraph.AddText("Subject: " + subject);