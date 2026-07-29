// Move the cursor into the header of the current page and type text there.

// Switch the document into the header editing mode so the following input goes to the header.

// Enter text that appears in the page header instead of the main document body.

const doc = Api.GetDocument();
doc.MoveCursorToHeader();
doc.EnterText('Text in the page header.');
