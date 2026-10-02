// Get a Range object that represents the left end of the specified range.

// How do I set the direction of a range?

// Get a range and set its direction, color fill, etc.

const color = Api.CreateColorFromRGB(255, 224, 204);
worksheet.GetRange("C4:D5").End("xlToLeft").SetFillColor(color);
