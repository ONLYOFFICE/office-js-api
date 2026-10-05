// Return the equation the cursor is currently located in.

// If the cursor is not inside an equation, null is returned instead.

// Insert an equation, then get the equation the cursor is left inside of and report its text.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
doc.Push(paragraph);
paragraph.Select();
doc.GetMaths().Add("x+1");

let activeMath = doc.GetMaths().GetActiveMath();
paragraph = Api.CreateParagraph();
paragraph.AddText("Active equation text: " + activeMath.GetText());
doc.Push(paragraph);
