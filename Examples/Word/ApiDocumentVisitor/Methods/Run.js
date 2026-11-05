// Highlight the bold runs of a document with a document visitor.

// The Run hook receives each text run with its formatting, and returning true skips the text of the run.

// Add a paragraph with regular and bold runs and highlight the bold ones in yellow.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);
paragraph.AddText("Submit the report ");
const deadline = Api.CreateRun();
deadline.AddText("before Friday");
deadline.SetBold(true);
paragraph.AddElement(deadline);
const rest = Api.CreateRun();
rest.AddText(" and send a copy to the team.");
paragraph.AddElement(rest);

const visitor = doc.GetDocumentVisitor();
visitor.Run = function (run) {
	if (run.GetTextPr().GetBold())
		run.SetHighlight("yellow");
	return true;
};
visitor.Traverse();