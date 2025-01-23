# Direction

Specifies the direction of end in the specified range.

## Type

Enumeration

## Values

- "xlUp"
- "xlDown"
- "xlToRight"
- "xlToLeft"


## Example

This example shows how to get a Range object that represents the left end of the specified range.

```javascript
worksheet.GetRange("C4:D5").End("xlToLeft").SetFillColor(Api.CreateColorFromRGB(255, 224, 204));
```
