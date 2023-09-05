# LineStyle

Specifies the line style used to form the cell border.

## Type

String

## Properties

- "None" 
- "Double" 
- "Hair" 
- "DashDotDot" 
- "DashDot" 
- "Dotted" 
- "Dashed" 
- "Thin" 
- "MediumDashDotDot" 
- "SlantDashDot" 
- "MediumDashDot" 
- "MediumDashed" 
- "Medium" 
- "Thick"

## Example

This example sets a bottom black dotted border for a cell.

```javascript
oWorksheet.GetRange("E2").SetBorders("Bottom", "Dotted", Api.CreateColorFromRGB(0, 0, 0));
```