// Cut a circle out of a rectangle in a document.

// Pass the merge operation as a string to the MergeShapes method.

// Merge the shapes with the "subtract" operation so that the circle is removed from the rectangle.

Api.MergeShapes([rectangle, circle], "subtract");
