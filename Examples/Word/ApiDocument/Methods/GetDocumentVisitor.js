// This example shows how to use a document visitor to collect text from all paragraphs.

const doc = Api.GetDocument();

const p1 = doc.GetElement(0);
p1.AddText('Text from the first paragraph.');

const p2 = Api.CreateParagraph();
p2.AddText('Document visitor example.');
doc.Push(p2);

const texts = [];
const visitor = doc.GetDocumentVisitor();
visitor.Text = function (text) {
	texts.push(text);
	return false;
};
visitor.Traverse(false);

const resultParagraph = Api.CreateParagraph();
resultParagraph.AddText('Collected text:\n');
texts.forEach(function (text) {
	resultParagraph.AddText(' - ' + text + '\n');
});
doc.Push(resultParagraph);
