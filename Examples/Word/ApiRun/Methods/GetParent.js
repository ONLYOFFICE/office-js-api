// Access the element that directly contains a text run.

// The parent is the paragraph that directly contains the text run.

// Navigate from a run to its parent and apply italic formatting through it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("Example run");
paragraph.AddElement(run);
let parent = run.GetParent();
parent.SetItalic(true);
