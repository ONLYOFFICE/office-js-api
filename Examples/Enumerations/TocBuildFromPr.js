// Add a table of contents which is generated from 9 outline levels to the document.

// Define the source that the table of contents is generated from, bounding the outline range.

// Add a table of contents spanning the outline levels from the start level up to level 9.

let tocBuildFromPr = { "OutlineLvlStart": 1, "OutlineLvls": 9 };
let tocPr = {
	"ShowPageNums": true,
	"RightAlgn": true,
	"LeaderType": "dot",
	"FormatAsLinks": true,
	"BuildFrom": tocBuildFromPr,
	"TocStyle": "standard"
};
doc.AddTableOfContents(tocPr);
