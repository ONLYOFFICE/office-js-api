// Insert paragraphs, plain strings, and inline runs as mixed content in a single call.

// Consecutive inline items are automatically grouped into one new paragraph.

// All element types — block-level, string literals, and runs — are accepted in the same array.

let doc = Api.GetDocument();
let para = Api.CreateParagraph();
para.AddText("Block paragraph");
let run = Api.CreateRun();
run.AddText(" and a run");
doc.InsertContent([para, "Plain string", run]);
