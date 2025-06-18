// This example converts the ApiNumbering object into the JSON object.

// How to get a JSON from the numbering object.

// Convert the bullet numbering to json and add it to the paragraph.

let doc = Api.GetDocument();
let numbering = doc.CreateNumbering("bullet");
let json = numbering.ToJSON();
let numberingFromJSON = Api.FromJSON(json);
for (let lvl = 0; lvl < 2; ++lvl) {
	let numLvl = numberingFromJSON.GetLevel(lvl);
	let paragraph = Api.CreateParagraph();
	paragraph.AddText("This is an example of the bulleted paragraph № " + (lvl + 1));
	paragraph.SetNumbering(numLvl);
	doc.Push(paragraph);
}
let type = numberingFromJSON.GetClassType();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Class type = " + type);
doc.Push(paragraph);