// This example sets the bullet or numbering to the paragraph.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
let bullet = Api.CreateBullet("-");
paragraph.SetBullet(bullet);
paragraph.AddText(" This is an example of the bulleted paragraph.");