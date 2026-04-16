// Get the outline level of the specified paragraph in a PDF document.

// How can I get the outline lvl using a paragraph in a PDF document?

// Get the outline lvl for a paragraph in a PDF document.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const rgb = Api.CreateRGBColor(50, 100, 150);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 200 * 36000, 50 * 36000, fill, stroke);
shape.SetPosition(10 * 36000, 10 * 36000);
page.AddObject(shape);

const content = shape.GetContent();
const paragraph = content.GetElement(0);

const levelBefore = paragraph.GetOutlineLvl();
paragraph.SetOutlineLvl(8);
const levelAfter = paragraph.GetOutlineLvl();

let text =  'Outline level (index) for this paragraph is currently set to ' + levelAfter;
text += ',\n';
text += 'but originally was set to ' + levelBefore;
paragraph.AddText(text);