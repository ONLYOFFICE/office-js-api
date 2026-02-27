// This example shows how to get the last Run with text in the paragraph.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

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
slide.AddObject(shape);
