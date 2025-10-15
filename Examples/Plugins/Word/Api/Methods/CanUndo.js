const addTextToDocument = function () {
	const doc = Api.GetDocument();
	const paragraph = doc.GetElement(0);
	paragraph.AddText(Asc.scope.text);
};

Asc.plugin.executeMethod('CanUndo', [], result => console.log('Can undo: ' + result));
Asc.scope.text = 'The text string that we added to the document so that we have an action to Undo.\n';
Asc.plugin.callCommand(addTextToDocument);

Asc.plugin.executeMethod('CanUndo', [], result => console.log('Can undo: ' + result));
