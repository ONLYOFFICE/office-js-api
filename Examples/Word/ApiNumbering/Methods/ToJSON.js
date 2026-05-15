// Serialize a numbering definition to JSON and restore it in a document.

// How do I convert a numbering object to JSON format in a document?

// Duplicate a bullet list style by exporting it to JSON and rebuilding it from scratch in a document.

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