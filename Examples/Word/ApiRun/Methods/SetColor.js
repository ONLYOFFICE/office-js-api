// This example sets the text color for the current text run.

// How to change text color.

// Create a new text run and change its font color.

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
