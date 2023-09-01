# SetHeight

Sets the height to the current table row within the current table.<br>Inherited From: [ApiTableRowPr#SetHeight](../../ApiTableRowPr/Methods/SetHeight.md)

## Syntax

expression.SetHeight(sHRule, nValue?);

`expression` - A variable that represents a [ApiTableRow](../ApiTableRow.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sHRule | Required | [TableHRule](../../../Enumerations/TableHRule.md) | The rule to apply the height value to the current table row or ignore it. Use the "atLeast" value to enable the SetHeight method use. |
| nValue | Optional | [twips](../../../Enumerations/twips.md)  | The height for the current table row measured in twentieths of a point (1/1440 of an inch). This value will be ignored if sHRule="auto". Default value is "null". |

## Returns

This method doesn't return any data.

## Example

This example sets the height to the current table row within the table.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("We create a 3x3 table and set the height of half an inch to row #1:");
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
var oTableRow = oTable.GetRow(0);
oTableRow.SetHeight("atLeast", 720);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
builder.SaveFile("docx", "SetHeight.docx");
builder.CloseFile();
```