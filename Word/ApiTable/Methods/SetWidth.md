# SetWidth

Sets the preferred width to the current table.
💡 Tables are created with the &#123;@link ApiTable#SetWidth&#125; method properties set by default, which always override the &#123;@link ApiTablePr#SetWidth&#125; method properties. That is why there is no use to try and apply &#123;@link ApiTablePr#SetWidth&#125;. We recommend you to use the  &#123;@link ApiTablePr#SetWidth&#125; method instead.

## Syntax

```javascript
expression.SetWidth(sType, nValue);
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | [TableWidth](../../Enumeration/TableWidth.md) |  | Type of the width value from one of the available width values types. |
| nValue | Optional | number |  | The table width value measured in positive integers. |

## Returns

This method doesn't return any data.

## Example

This example sets the preferred width to the table.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We set the table cells to preserve their size:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let table = Api.CreateTable(3, 3);
tablePr.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
```
