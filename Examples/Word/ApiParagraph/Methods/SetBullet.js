// Turn a plain paragraph into a bulleted list item in a document.

// How do I add a bullet marker to a paragraph in a document?

// Format a paragraph with a custom bullet character to create a list entry in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let bullet = Api.CreateBullet("-");
paragraph.SetBullet(bullet);
paragraph.AddText(" This is an example of the bulleted paragraph.");