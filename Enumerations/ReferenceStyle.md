# ReferenceStyle

Specifies reference style type.

## Type

String &#124; null

## Properties

- "xlR1C1" - r1c1 style.
- "xlA1" - A1 style.

## Example

This example gets reference style.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue(Api.GetRefereceStyle());
builder.SaveFile("xlsx", "ReferenceStyle.xlsx");
builder.CloseFile();
```