# callModule

Defines the method used to execute a remotely located script following a link.

## Syntax

```javascript
expression.callModule(url, callback, isClose);
```

`expression` - A variable that represents a [Plugin](../Plugin.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| url | Required | string |  | The resource code URL. |
| callback | Required | function |  | The result that the method returns. |
| isClose | Required | boolean |  | Defines whether the plugin window must be closed after the code is executed or left open waiting for another action. The *true* value is used to close the plugin window after executing a remotely located script. The *false* value is used to execute the code and leave the window open waiting for the next action. |

## Returns

This method doesn't return any data.

## Example

```javascript editor-docx
window.Asc.plugin.callModule("./templates/" + _templates[_index][0] + "/script.txt", function(content) {
    _templates_code[_index] = content;
});
```
