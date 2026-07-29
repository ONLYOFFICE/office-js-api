// Find text in a paragraph by a string and by a regular expression, then bold the matches.

// Look up a keyword and also match every digit sequence with a RegExp in one paragraph.

// Bold the first keyword match, then bold each number found by the /\d+/g expression.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Sample text 1 and text 2 within the paragraph.");

let byKeyword = paragraph.Search("text");
byKeyword[0].SetBold(true);

let byRegExp = paragraph.Search(/\d+/g);
for (let index = 0; index < byRegExp.length; index++)
	byRegExp[index].SetBold(true);
