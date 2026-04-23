// Set the subject field in the core properties of a document in a document.

// How do I define a subject for a document's metadata?

// Categorize or describe document content by writing a subject string to its metadata in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetSubject("ApiCore Method Showcase");

const subject = core.GetSubject();
let paragraph = doc.GetElement(0);
paragraph.AddText("Subject: " + subject);