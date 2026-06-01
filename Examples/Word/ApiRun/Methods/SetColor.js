// Apply a specific color to the text of a run in a document.

// How do I change the color of a piece of text in a document?

// Give a run a distinct hue to make it stand out visually in a document.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);

const firstRun = Api.CreateRun();
firstRun.AddText('This is a text run with the font color set to orange.');
firstRun.SetColor(Api.HexColor('#FF6F3D'));
paragraph.AddElement(firstRun);

const secondRun = Api.CreateRun();
secondRun.AddText('The text uses a bluish color created with HexColor method.');
const hexColor = Api.HexColor('#219ebc');
secondRun.SetColor(hexColor);
paragraph.AddElement(secondRun);