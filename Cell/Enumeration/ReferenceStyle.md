# ReferenceStyle

The cell reference type.

## Type

Enumeration

## Values

- 'xlA1'
- 'xlR1C1'


## Example

This example gets reference style.

```javascript
builder.CreateFile("xlsx");
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue(Api.GetReferenceStyle());
builder.SaveFile("xlsx", "ReferenceStyle.xlsx");
builder.CloseFile();
```
