// Find every occurrence of a word on a slide master and make the first match bold.

// Search is scoped to this master, returning each match as a text range.

// Add a shape to the master, search it for a keyword, and embolden the first result.

const presentation = Api.GetPresentation();
const master = presentation.GetMaster(0);

const shape = Api.CreateShape("rect", 300 * 36000, 100 * 36000);
shape.SetPosition(608400, 1267200);
master.AddObject(shape);
shape.CreateTextRange().SetText("Quarterly summary and quarterly outlook.");

const results = master.Search("quarterly");
results[0].SetBold(true);
