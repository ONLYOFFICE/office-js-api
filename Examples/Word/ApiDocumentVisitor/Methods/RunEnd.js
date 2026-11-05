// Find the longest text run of a document with a document visitor.

// The RunEnd hook is called after all the text of a run has been visited.

// Add a paragraph with three runs, measure the text of each one and make the longest run italic.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);
const texts = ["Short. ", "This run has the longest text. ", "Medium run."];
for (let i = 0; i < texts.length; ++i) {
	const run = Api.CreateRun();
	run.AddText(texts[i]);
	paragraph.AddElement(run);
}

let length = 0;
let maxLength = -1;
let longest = null;
const visitor = doc.GetDocumentVisitor();
visitor.Run = function () {
	length = 0;
	return false;
};
visitor.Text = function (text) {
	length += text.length;
};
visitor.RunEnd = function (run) {
	if (length > maxLength) {
		maxLength = length;
		longest = run;
	}
};
visitor.Traverse();

longest.SetItalic(true);