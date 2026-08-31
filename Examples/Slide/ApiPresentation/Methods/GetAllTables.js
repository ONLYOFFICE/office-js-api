// Compare the tables placed on a slide with those on its layout and master.

// How do I check that GetAllTables on a slide only returns that slide's own tables, not the ones on its layout or master?

// Add a table to a slide, its layout, and its master, then compare the table counts for each.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);
const layout = master.GetLayout(0);

slide.RemoveAllObjects();

const slideTable = Api.CreateTable(2, 2);
slide.AddObject(slideTable);

const fillColor = Api.RGB(100, 100, 200);
const fill = Api.CreateSolidFill(fillColor);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 250 * 36000, 50 * 36000, fill, stroke);
shape.SetPosition(45 * 36000, 100 * 36000);
slide.AddObject(shape);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Number of tables in presentation excluding slide layouts and master slides:: " + slide.GetAllTables().length);
paragraph.AddLineBreak();
paragraph.AddText("Number of tables on slide layout: " + layout.GetAllTables().length);
paragraph.AddLineBreak();
paragraph.AddText("Number of tables on slide master: " + master.GetAllTables().length);
paragraph.AddLineBreak();