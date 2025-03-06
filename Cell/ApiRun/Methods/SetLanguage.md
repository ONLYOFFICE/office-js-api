# SetLanguage

Specifies the languages which will be used to check spelling and grammar (if requested) when processing\nthe contents of this text run.

## Syntax

```javascript
expression.SetLanguage(sLangId);
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sLangId | Required | string |  | The possible value for this parameter is a language identifier as defined by\nRFC 4646/BCP 47. Example: "en-CA". |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example specifies the languages which will be used to check spelling and grammar (if requested) when processing the contents of this text run.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is a text run with the text language set to English (Canada).");
run.SetLanguage("en-CA");
paragraph.AddElement(run);
```
