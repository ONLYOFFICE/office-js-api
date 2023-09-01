# GetLocale

Returns the current locale ID.

## Syntax

expression.GetLocale();

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Number

## Example

This example shows how to get the current locale ID.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
Api.SetLocale("en-CA");
var nLocale = Api.GetLocale();
oWorksheet.GetRange("A1").SetValue("Locale: " + nLocale);
builder.SaveFile("xlsx", "GetLocale.xlsx");
builder.CloseFile();
```