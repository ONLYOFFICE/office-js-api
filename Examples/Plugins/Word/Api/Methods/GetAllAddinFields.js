window.Asc.plugin.executeMethod("GetAllAddinFields", null, function(fields) {
	let count = 0;
	fields.forEach(function(field) {
		if (field.Value.includes(bibPrefix) || field.Value.includes(citPrefix)) {
			count++;
			window.Asc.plugin.executeMethod("RemoveFieldWrapper", [field.FieldId], function() {
				count--;
				if (!count)
					window.Asc.plugin.executeCommand("close", "");
			});
		}
	});

	if (!fields.length)
		window.Asc.plugin.executeCommand("close", "");
});