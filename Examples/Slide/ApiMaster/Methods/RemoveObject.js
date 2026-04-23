// Remove a drawing object from a slide master by index.

// Add multiple copies of a shape to the master, then delete one using RemoveObject.

// Verify the removal by displaying a message in the remaining object.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);

slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("cube", 3212465, 963295, fill, stroke);
drawing.SetPosition(30 * 36000, 1267200);
drawing.SetSize(150 * 36000, 130 * 36000);

const copyDrawing = drawing.Copy();
copyDrawing.SetPosition(170 * 36000, 1267200);
copyDrawing.SetSize(150 * 36000, 130 * 36000);

master.AddObject(drawing);
master.AddObject(copyDrawing);
master.RemoveObject(1, 1);

const docContent = drawing.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("The second cube was removed from this master.");