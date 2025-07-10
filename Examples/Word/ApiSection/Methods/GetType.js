//

const doc = Api.GetDocument();

const firstParagraph = doc.GetElement(0);
firstParagraph.AddText('This is section #1 of the document. ');
const firstSection = doc.CreateSection(firstParagraph);

const possibleTypes = ['nextPage', 'oddPage', 'evenPage', 'continuous', 'nextColumn'];
const randomIndex = Math.random() * 5 >> 0;

const finalSection = doc.GetFinalSection();
finalSection.SetType(possibleTypes[randomIndex]);

const paragraph = Api.CreateParagraph();
paragraph.AddText('This is section #2 and we randomly set \'' + finalSection.GetType() + '\' type to it. ');
doc.Push(paragraph);
