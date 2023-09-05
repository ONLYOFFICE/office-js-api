# byte

A numeric value from 0 to 255.

## Type

Number

## Example

This example creates two RGB colors.

```javascript
// The resulting color is green, the bytes are measured in decimal numbers:
var oRGBColorGreen = Api.CreateRGBColor(0, 255, 0);
// The resulting color is red, the bytes are measured in hexadecimal numbers:
var oRGBColorRed = Api.CreateRGBColor(0xff, 0, 0);
```