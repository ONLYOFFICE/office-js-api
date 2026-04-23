// Access the current text run in a shape's content in a presentation.

// How do I get the text run where the cursor is positioned in a shape in a presentation?

// Retrieve the active text run from a shape and add text to it.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.HexColor('#F5C6AA'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('roundRect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
const docContent = shape.GetContent();

const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.AddText('This is a run inside the shape.');
paragraph.AddElement(run);

const currentRun = docContent.GetCurrentRun();
if (currentRun) {
  currentRun.AddText(' (Current run detected!)');
}
slide.AddObject(shape);