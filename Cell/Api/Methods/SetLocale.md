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
let worksheet = Api.GetActiveSheet();
Api.SetLocale("en-CA");
worksheet.GetRange("A1").SetValue("A sample spreadsheet with the language set to English (Canada).");
```
