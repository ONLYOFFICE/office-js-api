// Apply a background shading color to a paragraph in a document.

// How do I fill the background of a paragraph with a specific color in a document?

// Highlight paragraph content by setting its background shade in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is an example of setting a shade to a paragraph. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.SetShd("clear", Api.HexColor('#FF6F3D'));