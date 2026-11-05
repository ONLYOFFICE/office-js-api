// Count the characters of every paragraph with the Text and ParagraphEnd hooks of a document visitor.

// The ParagraphEnd hook is called after all the text of a paragraph has been visited.

// Add two paragraphs, count the characters of each one and write the counts into a new paragraph.

const doc = Api.GetDocument();
doc.GetElement(0).AddText("Short line.");
const second = Api.CreateParagraph();
second.AddText("A slightly longer line of text.");
doc.Push(second);

const counts = [];
let characters = 0;
const visitor = doc.GetDocumentVisitor();
visitor.Paragraph = function () {
	characters = 0;
	return false;
};
visitor.Text = function (text) {
	characters += text.length;
};
visitor.ParagraphEnd = function () {
	counts.push(characters);
};
visitor.Traverse();

const result = Api.CreateParagraph();
result.AddText("Characters per paragraph: " + counts.join(", "));
doc.Push(result);