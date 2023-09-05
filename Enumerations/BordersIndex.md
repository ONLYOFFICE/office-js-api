# BordersIndex

Specifies the cell border position.

## Type

String

## Properties

- "DiagonalDown" 
- "DiagonalUp" 
- "Bottom" 
- "Left" 
- "Right" 
- "Top" 
- "InsideHorizontal" 
- "InsideVertical"

## Example

This example sets a bottom black dotted border for a cell.

```javascript
oWorksheet.GetRange("E2").SetBorders("Bottom", "Dotted", Api.CreateColorFromRGB(0, 0, 0));
```