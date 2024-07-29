# SetVerAxisTitle

Specifies the chart vertical axis title.

## Syntax

expression.SetVerAxisTitle(sTitle, nFontSize, bIsBold);

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sTitle | Required | string |  | The title which will be displayed for the vertical axis of the current chart. |
| nFontSize | Required | [pt](../../Enumeration/pt.md) |  | The text size value measured in points. |
| bIsBold | Required | bool |  | Specifies if the vertical axis title is written in bold font or not.* @see office-js-api/Examples/Word/ApiChart/Methods/SetVerAxisTitle.js |

## Returns

This method doesn't return any data.