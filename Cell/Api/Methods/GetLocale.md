# GetLocale

Returns the current locale ID.

## Syntax

```javascript
expression.GetLocale();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

This example shows how to get the current locale ID.

```javascript
var oWorksheet = Api.GetActiveSheet();
Api.SetLocale("en-CA");
var nLocale = Api.GetLocale();
oWorksheet.GetRange("A1").SetValue("Locale: " + nLocale);
```
