// This example sets the bullet or numbering to the paragraph.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let bullet = Api.CreateBullet("-");
paragraph.SetBullet(bullet);
paragraph.AddText(" This is an example of the bulleted paragraph.");