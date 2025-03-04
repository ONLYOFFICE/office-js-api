# GetRange

Returns the ApiRange object by the range reference.

## Syntax

```javascript
expression.GetRange(sRange);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRange | Required | string |  | The range of cells from the current sheet. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example

This example shows how to get the ApiRange object by the range reference.

```javascript editor-xlsx
// How to get a range object using an address.

// Update a rabge knowing its cell address.

var oWorksheet = Api.GetActiveSheet();
var oRange = Api.GetRange("A1:C1");
oRange.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
oWorksheet.GetRange("A3").SetValue("The color was set to the background of cells A1:C1.");
```
