// Add a table of contents of the standard style to the document.

// How do I create table of contents properties with a specific style?

// Add a table of contents with standard style.

let tocStyle = "standard";
let tocPr = {
	"ShowPageNums": true,
	"RightAlgn": true,
	"LeaderType": "dot",
	"FormatAsLinks": true,
	"BuildFrom": {
		"OutlineLvls": 9
	},
	"TocStyle": tocStyle
};
doc.AddTableOfContents(tocPr);
