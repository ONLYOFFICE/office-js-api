// Access the element that directly contains a form.

// The parent is the paragraph that directly contains the form.

// Navigate from a text form up to its parent paragraph and make it bold.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let form = Api.CreateTextForm({ "key": "Name", "placeholder": "Enter text" });
paragraph.Push(form);
let parent = form.GetParent();
parent.SetBold(true);
