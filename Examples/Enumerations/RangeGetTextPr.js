// This example returns a text from the specified range.

// How to retrieve a text from a range with the specified properties.

// Get a text from a range of cells.

let text = range.GetText({
	"Numbering": true,
	"Math": true,
	"NewLineSeparator": "\r",
	"TabSymbol": "\t",
	"NewLineParagraph": true,
	"TableCellSeparator": "\t",
	"TableRowSeparator": "\r\n",
	"ParaSeparator": "\r\n"
});
