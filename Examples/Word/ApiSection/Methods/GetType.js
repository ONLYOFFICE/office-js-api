// Retrieve the layout type assigned to a section in a document.

// How do I find out what kind of section break is used in a document?

// Inspect the break style applied to a section to understand its flow in a document.

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