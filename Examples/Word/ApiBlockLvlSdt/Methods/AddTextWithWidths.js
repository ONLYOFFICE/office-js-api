// Add Unicode code points with exact character widths to a block content control in a document.

// How do I insert characters preserving their exact widths into a block text content control in a document?

// Fill a block content control with the "Widths" word so that every character keeps the width specified in millimeters.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.AddText([87, 105, 100, 116, 104, 115], [5, 3, 4, 3, 4, 3]);
doc.AddElement(0, blockLvlSdt);
