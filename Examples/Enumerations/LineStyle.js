// This example sets a bottom black dotted border for a cell.

// How to set a style of a border line.

// Get a range and change its border line style to dotted.

worksheet.GetRange("E2").SetBorders("Bottom", "Dotted", Api.CreateColorFromRGB(0, 0, 0));