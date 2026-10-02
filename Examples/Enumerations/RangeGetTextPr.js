// Return a text from the specified range.

// How do I get the text from a range with specific properties?

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
