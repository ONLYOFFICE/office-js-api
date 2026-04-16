// Get a current paragraph for further manipulation in a document.

// How can I get current paragraph using a document in a document?

// Get current paragraph for a document in a document.

const doc = Api.GetDocument();
const paragraph = doc.GetCurrentParagraph();
paragraph.AddText('This is current paragraph');
paragraph.SetBold(true);