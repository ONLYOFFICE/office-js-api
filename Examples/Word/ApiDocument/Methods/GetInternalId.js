// Get the internal ID of the document in a document.

// How do I get the internal id in a document?

// Get the internal id using a document object.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);

const internalId = doc.GetInternalId();
paragraph.AddText('Document internal ID: ' + internalId);