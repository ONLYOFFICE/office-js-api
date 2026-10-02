// Add a table of figures with the specified properties to the document.

// How do I create table of figures properties?

// Add a table of figures from created properties.

let tofPr = {
	"ShowPageNums": true,
	"RightAlgn": true,
	"LeaderType": "dot",
	"FormatAsLinks": true,
	"BuildFrom": "Figure",
	"LabelNumber": true,
	"TofStyle": "distinctive"
};
doc.AddTableOfFigures(tofPr);
