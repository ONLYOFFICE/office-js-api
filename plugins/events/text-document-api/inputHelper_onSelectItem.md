# inputHelper_onSelectItem

The function called when the user is trying to select an item from the input helper.

| **Name** | **Data type** | **Description** |
| --------- | ------------- | ----------- |
| item | object | Defines the selected item:\ -**text** - the item text,  \ -**type**: string,  \ -**example**: "name";\ -**id** - the item index,  \ -**type**: string,  \ -**example**: "1". |

```javascript
window.Asc.plugin.inputHelper_onSelectItem = function(item) {
    if (!item)
        return;

    window.Asc.plugin.executeMethod("InputText", [item.text, window.Asc.plugin.currentText]);
    window.Asc.plugin.getInputHelper().unShow();
};
```

