// This example selects the text in the document.
let doc = Api.GetDocument();
doc.SetSelection({
	start: { page: 0, point: { x: 10, y: 10 } },
	end:   { page: 0, point: { x: 100, y: 100 } }
});
console.log('We selected the text in the document');
