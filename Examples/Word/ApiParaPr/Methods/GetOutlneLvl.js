// Compare the original and updated outline levels of a paragraph in a document.

// How do I check the outline level of a paragraph before and after changing it in a document?

// Track outline level changes on a paragraph to confirm that the new level was applied in a document.

const doc = Api.GetDocument();

const paragraph = doc.GetElement(0);
const paraPr = paragraph.GetParaPr();

const levelBefore = paraPr.GetOutlineLvl();
paraPr.SetOutlineLvl(8);
const levelAfter = paraPr.GetOutlineLvl();

let text =  'Outline level (index) for this paragraph is currently set to ' + levelAfter;
text += ',\nbut originally was set to ' + levelBefore;
paragraph.AddText(text);