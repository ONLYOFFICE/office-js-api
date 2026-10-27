// Update floating action buttons over the editor area.

// How do I enable or remove a floating action button that is already added?

// Enable one floating action button and remove another one.

window.Asc.plugin.executeMethod("UpdateFloatActionButtons", [
    {
        "guid": window.Asc.plugin.guid,
        "items": [
            {
                "id": "fab-settings",
                "disabled": false
            },
            {
                "id": "fab-insert",
                "removed": true
            }
        ]
    }
]);