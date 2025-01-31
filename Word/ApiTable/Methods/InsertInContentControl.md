# InsertInContentControl

Wraps the current table object with a content control.

## Syntax

```javascript
expression.InsertInContentControl(nType);
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nType | Required | number |  | Defines if this method returns the ApiBlockLvlSdt (nType === 1) or ApiTable (any value except 1) object. |

## Returns

[ApiTable](../../ApiTable/ApiTable.md) | [ApiBlockLvlSdt](../../ApiBlockLvlSdt/ApiBlockLvlSdt.md)

## Example

This example wraps the current table object with a content control.

```javascript
let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
let blockLvlSdt = table.InsertInContentControl(1);
doc.AddElement(0, blockLvlSdt);
```
