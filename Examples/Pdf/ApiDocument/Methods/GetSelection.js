// This example gets the current selection in the document.
let doc = Api.GetDocument();
doc.SetSelection({
	start: { page: 0, point: { x: 10, y: 10 } },
	end:   { page: 0, point: { x: 100, y: 100 } }
});
let selection = doc.GetSelection();
console.log('Selection start - page: ' + selection.start.page + ', x: ' + selection.start.point.x + ', y: ' + selection.start.point.y);
console.log('Selection end - page: ' + selection.end.page + ', x: ' + selection.end.point.x + ', y: ' + selection.end.point.y);
