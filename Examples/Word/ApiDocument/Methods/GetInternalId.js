// This example shows how to get the internal ID of the document.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);

const internalId = doc.GetInternalId();
paragraph.AddText('Document internal ID: ' + internalId);
