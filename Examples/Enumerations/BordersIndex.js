// This example sets a bottom black dotted border for a cell.

// How to add a border to the cell.

// Use a border index to set borders with properties.

const color = Api.CreateColorFromRGB(0, 0, 0);
worksheet.GetRange("E2").SetBorders("Bottom", "Dotted", color);
