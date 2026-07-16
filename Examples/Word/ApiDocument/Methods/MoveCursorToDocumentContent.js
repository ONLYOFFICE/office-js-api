// Return the cursor from the header or footer back to the main document content.

// Leave the header/footer editing mode after adding text so the next input goes to the document body.

// Enter text into the main document again once the cursor has left the footer.

const doc = Api.GetDocument();
doc.MoveCursorToFooter();
doc.EnterText('Text in the page footer.');

doc.MoveCursorToDocumentContent();
doc.EnterText('Text in the main document.');
