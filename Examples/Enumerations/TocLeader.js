// Add a table of contents with the dot leader to the document.

// How do I create table of contents properties with a specific leader type?

// Add a table of contents with dot leader type.

let tocLeader = "dot";
let tocPr = {
	"ShowPageNums": true,
	"RightAlgn": true,
	"LeaderType": tocLeader,
	"FormatAsLinks": true,
	"BuildFrom": {
		"OutlineLvls": 9
	},
	"TocStyle": "standard"
};
doc.AddTableOfContents(tocPr);
