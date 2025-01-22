# attachContextMenuClickEvent

Defines the method to add an event listener, a function that will be called whenever the specified event is clicked in the context menu.

## Syntax

expression.attachContextMenuClickEvent(id, action);

`expression` - A variable that represents a [Plugin](../Plugin.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| id | Required | string |  | The event name. |
| action | Required | function |  | The event listener. |

## Returns

This method doesn't return any data.

## Example

```javascript
window.Asc.plugin.attachContextMenuClickEvent("onClickItem1Sub1", function(){
    window.Asc.plugin.executeMethod("InputText", ["clicked: onClickItem1Sub1"]);
});
```
