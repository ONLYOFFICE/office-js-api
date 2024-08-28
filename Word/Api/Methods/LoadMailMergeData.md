# LoadMailMergeData

Loads data for the mail merge.

## Syntax

expression.LoadMailMergeData(aList);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| aList | Required | Array.<Array.&lt;String&gt;> |  | Mail merge data. The first element of the array is the array with names of the merge fields. The rest of the array elements are arrays with values for the merge fields. |

## Returns

boolean

## Example

This example shows how to load data for the mail merge.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var arrField = ["Greeting line", "First name", "Last name"];
for (let i = 0; i < 3; i++) {
	var oRun = Api.CreateRun();
	oRun.AddText(arrField[i]);
	oParagraph.AddElement(oRun);
	oRun.WrapInMailMergeField();
	oParagraph.AddText(" ");
}
oParagraph.AddText("!");
Api.LoadMailMergeData([arrField, ["Dear", "John", "Smith"], ["Hello", "Lara", "Davis"]]);
Api.MailMerge();
```
