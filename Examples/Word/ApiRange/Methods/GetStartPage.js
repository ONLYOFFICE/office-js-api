// This example shows how to get the start and end pages of a range in a document.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);

for (let i = 0; i <= 100; i++) {
	const run = Api.CreateRun();
	run.AddText('This is run number ' + i + '.\n');
	paragraph.AddElement(run);
}

const range = doc.GetRange(2367, 2413);
range.SetBold(true);

const startPage = range.GetStartPage();
const endPage = range.GetEndPage();
const newParagraph = Api.CreateParagraph();
newParagraph.AddText('Bold text starts on page ' + startPage + ' and ends on page ' + endPage + '.');
doc.Push(newParagraph);

/*

// There is a bug - range.GetStartPage() returns 0,
// but it works correctly when page is redrawn.
setTimeout(() => {
	console.log('Actual start page: ' + range.GetStartPage())
	console.log('Actual end page: ' + range.GetEndPage())
}, 1000)

*/
