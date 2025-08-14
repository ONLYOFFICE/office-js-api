// This example sets the range calculate position mode.

// How to set cursor to beginning of the run inside the range.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);

let run1 = Api.CreateRun();
run1.AddText('First run ');
run1.SetBold(true);

let run2 = Api.CreateRun();
run2.AddText('Second run');
run2.SetItalic(true);

paragraph.AddElement(run1);
paragraph.AddElement(run2);

let range = doc.GetRange(0, 20);

range.SetRangeMode("logic");
range.MoveCursorToPos(12);

let isEqual = run2.GetText() == doc.GetCurrentRun().GetText();

paragraph = Api.CreateParagraph();
paragraph.AddText(isEqual ? "The cursor is at the beginning of the second run." : "Script error, contact support");
doc.Push(paragraph);