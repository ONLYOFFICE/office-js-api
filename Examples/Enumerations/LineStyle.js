// Set the dotted line style for a cell border.

// How do I set the style of a border line?

// Get a range and change its border line style to dotted.

const color = Api.CreateColorFromRGB(0, 0, 0);
worksheet.GetRange("E2").SetBorders("Bottom", "Dotted", color);
