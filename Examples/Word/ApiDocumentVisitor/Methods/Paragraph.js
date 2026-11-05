// Make every paragraph that starts with "Note" bold with a document visitor.

// The Paragraph hook receives each paragraph of the document, including the paragraphs inside table cells.

// Add three paragraphs and make bold the ones whose text starts with "Note".

const doc = Api.GetDocument();
doc.GetElement(0).AddText("Note: the meeting starts at 10:00.");
const details = Api.CreateParagraph();
details.AddText("The agenda will be sent later.");
doc.Push(details);
const reminder = Api.CreateParagraph();
reminder.AddText("Note: bring the quarterly report.");
doc.Push(reminder);

const visitor = doc.GetDocumentVisitor();
visitor.Paragraph = function (paragraph) {
	if (paragraph.GetText().indexOf("Note") === 0)
		paragraph.SetBold(true);
	return true;
};
visitor.Traverse();