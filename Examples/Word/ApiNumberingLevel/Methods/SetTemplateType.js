// Apply a predefined numbering template to a list level in a document.

// How do I switch a list to use an alphabetic "A., B., C." numbering template in a document?

// Choose from built-in list styles to quickly format a numbered list without defining a custom type in a document.

let doc = Api.GetDocument();
let numbering = doc.CreateNumbering("numbered");
let numLvl = numbering.GetLevel(0);
numLvl.SetTemplateType("A.");
let paragraph = doc.GetElement(0);
paragraph.SetNumbering(numLvl);
paragraph.AddText("This is the first element of an A.-B.-C. numbered list");
paragraph = Api.CreateParagraph();
paragraph.SetNumbering(numLvl);
paragraph.AddText("This is the second element of an A.-B.-C. numbered list");
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.SetNumbering(numLvl);
paragraph.AddText("This is the third element of an A.-B.-C. numbered list");
doc.Push(paragraph);