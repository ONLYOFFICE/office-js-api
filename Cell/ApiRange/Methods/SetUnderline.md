# SetUnderline

Specifies that the contents of the current cell / cell range are displayed along with a line appearing directly below the character.

## Syntax

```javascript
expression.SetUnderline(undelineType);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| undelineType | Required | 'none' \| 'single' \| 'singleAccounting' \| 'double' \| 'doubleAccounting' |  | Specifies the type of the\nline displayed under the characters. The following values are available:\n-**"none"** - for no underlining;\n-**"single"** - for a single line underlining the cell contents;\n-**"singleAccounting"** - for a single line underlining the cell contents but not protruding beyond the cell borders;\n-**"double"** - for a double line underlining the cell contents;\n-**"doubleAccounting"** - for a double line underlining the cell contents but not protruding beyond the cell borders. |

## Returns

This method doesn't return any data.

## Example

This example specifies that the contents of the current cell is displayed along with a line appearing directly below the character.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("The text underlined with a single line");
worksheet.GetRange("A2").SetUnderline("single");
worksheet.GetRange("A4").SetValue("Normal text");
```
