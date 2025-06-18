// This example sets the timestamp of the comment creation in UTC format.

// How to change a creation time of a comment in UTC format.

// Get all comments from the presentation and change its first one's creation UTC time.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].SetTimeUTC("1672247153658");
let timeUTC = comments[0].GetTimeUTC();
paragraph = Api.CreateParagraph();
paragraph.AddText("The timestamp of comment creation in UTC format: " + timeUTC);
doc.Push(paragraph);