// Remove a math equation from the document.

// Removing the equation detaches it from its paragraph, so it no longer has a parent.

// Create an equation, remove it and report the result, then try removing it again to show it now returns false.

let doc = Api.GetDocument();
let math = doc.GetMaths().Add("a^2 + b^2 = c^2");
let removed = math.Remove();
let removedAgain = math.Remove();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Removed: " + removed + ", removed again: " + removedAgain + ", parent: " + math.GetParent());
doc.Push(paragraph);
