// This example specify that the first row contains header information.

// How to specify a sorting header for a range.

// Sort a range of cells indicating sorting header.

worksheet.GetRange("A1:C5").SetSort("A1:A5", "xlAscending", "B1:B5", "xlDescending", "C1:C5", "xlAscending", "xlYes", "xlSortColumns");