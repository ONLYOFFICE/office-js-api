// Set the bullet or numbering to the paragraph in a document.

// Create a bullet and add it to the paragraph in a document.

// Make the paragraph bulleted in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let bullet = Api.CreateBullet("-");
paragraph.SetBullet(bullet);
paragraph.AddText(" This is an example of the bulleted paragraph.");