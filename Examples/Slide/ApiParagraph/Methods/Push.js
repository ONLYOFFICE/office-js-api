// This example adds an element to the paragraph.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.HexColor('#FF6F3D'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('roundRect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.RemoveAllElements();

let run = Api.CreateRun();
run.AddText('This is run #0, you must not push it to take effect. ');
paragraph.AddElement(run);
for (let i = 0; i < 5; i++) {
	run = Api.CreateRun();
	run.AddText('This is run #' + (i + 1) + '. ');
	paragraph.Push(run);
}
slide.AddObject(shape);
