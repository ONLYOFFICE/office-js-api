# SetLocale

Sets a locale to the document.

## Syntax

```javascript
expression.SetLocale(LCID);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| LCID | Required | number |  | The locale specified. |

## Returns

This method doesn't return any data.

## Example

This example sets a locale to the document.

```javascript editor-xlsx
// How to set a region to the document.

// Set or change the locale of the document.

var oWorksheet = Api.GetActiveSheet();
Api.SetLocale("en-CA");
oWorksheet.GetRange("A1").SetValue("A sample spreadsheet with the language set to English (Canada).");
```
