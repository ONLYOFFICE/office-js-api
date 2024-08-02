window.Asc.plugin.executeMethod("GetAllAddinFields", null, function(arrFields) {
	let count = 0;
	arrFields.forEach(function(field) {
		if (field.Value.includes(bibPrefix) || field.Value.includes(citPrefix)) {
			count++;
			window.Asc.plugin.executeMethod("RemoveFieldWrapper", [field.FieldId], function() {
				count--;
				if (!count)
					window.Asc.plugin.executeCommand("close", "");
			});
		}
	});

	if (!arrFields.length)
		window.Asc.plugin.executeCommand("close", "");
});