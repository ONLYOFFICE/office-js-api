# onContextMenuClick

The function called when the context menu item has been clicked.

| **Name** | **Data type** | **Description** |
| --------- | ------------- | ----------- |
| id | string | Item ID. |

```javascript
window.Asc.plugin.event_onContextMenuClick = function(id)
{
    var pluginObj = window.Asc.plugin;
    var itemId = id;
    var itemData = undefined;
    var itemPos = itemId.indexOf("_oo_sep_");
    if (-1 !== itemPos)
    {
        itemData = itemId.substring(itemPos + 8);
        itemId = itemId.substring(0, itemPos);
    }

    if (pluginObj.contextMenuEvents && pluginObj.contextMenuEvents[itemId])
        pluginObj.contextMenuEvents[itemId].call(pluginObj, itemData);
};
```

