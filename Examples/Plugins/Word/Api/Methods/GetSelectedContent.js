const prepareShape = function () {
	const doc = Api.GetDocument();

	const text = 'Text string to select from.';
	const paragraph = doc.GetElement(0);
	paragraph.AddText(text);

	const range = paragraph.GetRange(6, 12);
	range.Select();
};

Asc.plugin.callCommand(prepareShape);
Asc.plugin.executeMethod('GetSelectedContent', [], console.log);
