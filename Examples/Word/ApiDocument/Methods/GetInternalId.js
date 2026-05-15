// Retrieve the unique internal identifier of a document.

// How do I read the internal ID assigned to a document?

// Display the document ID as text to confirm it is accessible in a document.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);

const internalId = doc.GetInternalId();
paragraph.AddText('Document internal ID: ' + internalId);