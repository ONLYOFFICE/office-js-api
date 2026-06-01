// Access the paragraph where the cursor is placed in a document.

// How do I get the paragraph at the current cursor position in a document?

// Apply bold formatting to the paragraph the user is actively editing in a document.

const doc = Api.GetDocument();
const paragraph = doc.GetCurrentParagraph();
paragraph.AddText('This is current paragraph');
paragraph.SetBold(true);