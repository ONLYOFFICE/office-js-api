// This example adds a table of contents which is generated from 9 outline levels to the document.

// How to create a table of contents properties indicating the source from which it should be generated.

// Add a table of contents from the nine outline levels of the document.

let tocBuildFromPr = { "OutlineLvls": 9 };
let tocPr = {
	"ShowPageNums": true,
	"RightAlgn": true,
	"LeaderType": "dot",
	"FormatAsLinks": true,
	"BuildFrom": tocBuildFromPr,
	"TocStyle": "standard"
};
doc.AddTableOfContents(tocPr);
