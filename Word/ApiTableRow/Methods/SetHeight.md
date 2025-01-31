# SetHeight

Sets the height to the current table row within the current table.

## Syntax

```javascript
expression.SetHeight(sHRule, nValue);
```

`expression` - A variable that represents a [ApiTableRow](../ApiTableRow.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sHRule | Required | "auto" | "atLeast" |  | The rule to apply the height value to the current table row or ignore it. Use the &lt;code&gt;"atLeast"&lt;/code&gt; value to enable the &lt;code&gt;SetHeight&lt;/code&gt; method use. |
| nValue | Optional | [twips](../../Enumeration/twips.md) |  | The height for the current table row measured in twentieths of a point (1/1440 of an inch). This value will be ignored if &lt;code&gt;sHRule="auto"&lt;code&gt;. |

## Returns

This method doesn't return any data.

## Example

This example sets the height to the current table row within the table.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and set the height of half an inch to all the rows:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetTableLook(true, true, true, true, false, false);
let tableRowPr = tableStyle.GetTableRowPr();
tableRowPr.SetHeight("atLeast", 720);
table.SetStyle(tableStyle);
doc.Push(table);
```
