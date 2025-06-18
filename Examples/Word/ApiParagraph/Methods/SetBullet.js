// This example sets the bullet or numbering to the paragraph.

// Create a bullet and add it to the paragraph.

// Make the paragraph bulleted.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let bullet = Api.CreateBullet("-");
paragraph.SetBullet(bullet);
paragraph.AddText(" This is an example of the bulleted paragraph.");