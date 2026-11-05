// Count the words of a document with a document visitor.

// The Text hook receives the text of runs in pieces, so the pieces are joined before counting.

// Add two paragraphs, count their words and write the result into a new paragraph.

const doc = Api.GetDocument();
doc.GetElement(0).AddText("The quarterly report is ready.");
const second = Api.CreateParagraph();
second.AddText("Please review it before the meeting.");
doc.Push(second);

let text = "";
const visitor = doc.GetDocumentVisitor();
visitor.Text = function (piece) {
	text += piece;
};
visitor.ParagraphEnd = function () {
	text += " ";
};
visitor.Traverse();

const words = text.split(/\s+/).filter(function (word) {
	return word !== "";
});
const result = Api.CreateParagraph();
result.AddText("Words: " + words.length);
doc.Push(result);