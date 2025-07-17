// This example shows how to get text from the body shape of the notes page.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const notesPage = slide.GetNotesPage();
notesPage.AddBodyShapeText('This text was added using AddBodyShapeText method to notes page of the first slide');

const fill = Api.CreateSolidFill(Api.CreateRGBColor(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 150 * 36000, fill, stroke);
slide.AddObject(shape);

const text = notesPage.GetBodyShapeText();
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText(text);
