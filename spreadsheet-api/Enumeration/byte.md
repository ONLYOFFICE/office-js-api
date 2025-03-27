# byte

A numeric value from 0 to 255.

## Type

number



## Example

This example creates two RGB colors.

```javascript editor-xlsx
// The resulting color is green, the bytes are measured in decimal numbers:
let rgbColorGreen = Api.CreateRGBColor(0, 255, 0);
// The resulting color is red, the bytes are measured in hexadecimal numbers:
let rgbColorRed = Api.CreateRGBColor(0xff, 0, 0);
```
