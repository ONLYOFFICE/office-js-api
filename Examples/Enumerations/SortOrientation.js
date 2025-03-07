// This example specify that the sort should be by column.

// How to specify a sorting orientation (column wise or row wise) for each range.

// Sort a range of cells indicating sorting orientation for sub ranges.

worksheet.GetRange("A1:C5").SetSort("A1:A5", "xlAscending", "B1:B5", "xlDescending", "C1:C5", "xlAscending", "xlYes", "xlSortColumns");