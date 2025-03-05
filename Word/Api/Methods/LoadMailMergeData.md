# LoadMailMergeData

Loads data for the mail merge.

## Syntax

```javascript
expression.LoadMailMergeData(data);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| data | Required | String[][] |  | Mail merge data. The first element of the array is the array with names of the merge fields. The rest of the array elements are arrays with values for the merge fields. |

## Returns

boolean

## Example

This example shows how to load data for the mail merge.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fields = ["Greeting line", "First name", "Last name"];
for (let i = 0; i < fields.length; ++i) 
{
	let run = Api.CreateRun();
	run.AddText(fields[i]);
	paragraph.AddElement(run);
	run.WrapInMailMergeField();
	paragraph.AddText(" ");
}
paragraph.AddText("!");
Api.LoadMailMergeData([fields, ["Dear", "John", "Smith"], ["Hello", "Lara", "Davis"]]);
Api.MailMerge();

```
