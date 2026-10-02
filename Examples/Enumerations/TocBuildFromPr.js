// Add a table of contents which is generated from 9 outline levels to the document.

// How do I create table of contents properties that set the source it is built from?

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
