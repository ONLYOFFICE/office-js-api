// Get the last Run with text in the paragraph in a PDF document.

// How to get last run with text for a paragraph in a PDF document?

// Get last run with text and display the result in a PDF document.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.RemoveAllElements();

for (let i = 0; i < 5; i++) {
	const run = Api.CreateRun();
	run.AddText('This is run #' + (i + 1) + '. ');
	paragraph.Push(run);
}

const lastRun = paragraph.GetLastRunWithText();
lastRun.AddText(' [Last run]');
lastRun.SetBold(true);
page.AddObject(shape);