//

const doc = Api.GetDocument();
const firstParagraph = doc.GetElement(0);

const run = Api.CreateRun();
run.AddText("This is an inline text content control.");

const inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.AddElement(run, 0);
firstParagraph.AddInlineLvlSdt(inlineLvlSdt);

let internalId = inlineLvlSdt.GetInternalId();
const paragraph = Api.CreateParagraph();
paragraph.AddText("Internal Id: " + internalId);
doc.Push(paragraph);
