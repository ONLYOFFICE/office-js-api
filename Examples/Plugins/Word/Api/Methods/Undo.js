const addTextToDocument = function () {
	const doc = Api.GetDocument();
	const paragraph = doc.GetElement(0);
	paragraph.AddText(Asc.scope.text);
};

Asc.scope.text = 'The text string that we first added to the document.';
Asc.plugin.callCommand(addTextToDocument);
Asc.plugin.executeMethod('Undo');

Asc.scope.text = 'And the second one, which is the only one that will remain visible after calling Undo method.';
Asc.plugin.callCommand(addTextToDocument);
