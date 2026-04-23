// Assign an outline level to a paragraph to control its position in the document structure in a document.

// How do I set the outline level of a paragraph in a document?

// Change a paragraph's heading depth so it appears correctly in the navigation panel.

const doc = Api.GetDocument();

const paragraph = doc.GetElement(0);
const paraPr = paragraph.GetParaPr();

const levelBefore = paraPr.GetOutlineLvl();
paraPr.SetOutlineLvl(8);
const levelAfter = paraPr.GetOutlineLvl();

let text =  'Outline level (index) for this paragraph is currently set to ' + levelAfter;
text += ',\nbut originally was set to ' + levelBefore;
paragraph.AddText(text);