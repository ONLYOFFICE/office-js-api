// This example selects the text in the document and returns it.
let doc = Api.GetDocument();
doc.SetSelection({
	start: { page: 0, point: { x: 10, y: 10 } },
	end:   { page: 0, point: { x: 100, y: 100 } }
});
console.log(`The selected text is: ${doc.GetSelectedText()}`);
