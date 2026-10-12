// Move the cursor into the footer of the current page and type text there.

// Switch the document into the footer editing mode so the following input goes to the footer.

// Enter text that appears in the page footer instead of the main document body.

const doc = Api.GetDocument();
doc.MoveCursorToFooter();
doc.EnterText('Text in the page footer.');
