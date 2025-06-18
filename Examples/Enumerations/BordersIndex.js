// This example sets a bottom black dotted border for a cell.

// How to add a border to the cell.

// Use a border index to set borders with properties.

worksheet.GetRange("E2").SetBorders("Bottom", "Dotted", Api.CreateColorFromRGB(0, 0, 0));