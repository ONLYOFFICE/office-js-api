// Find every occurrence of a word on a slide layout and make the first match bold.

// Search is scoped to this layout, returning each match as a text range.

// Add a shape to the layout, search it for a keyword, and embolden the first result.

const presentation = Api.GetPresentation();
const master = presentation.GetMaster(0);
const layout = master.GetLayout(0);

const shape = Api.CreateShape("rect", 300 * 36000, 100 * 36000);
shape.SetPosition(608400, 1267200);
layout.AddObject(shape);
shape.CreateTextRange().SetText("Preliminary layout draft and preliminary review.");

const results = layout.Search("preliminary");
results[0].SetBold(true);
