import os
import sys

def make_files():

	methods_dir = "./Methods/"
	properties_dir = "./Properties/"
	events_dir = "./Events/"

	pattern_method_file_dir = '../../method_pattern.md'
	pattern_method_file = open(pattern_method_file_dir, "r")
	pattern_method_content = pattern_method_file.read()

	pattern_prop_dir = '../../prop_pattern.md'
	pattern_prop_file = open(pattern_prop_dir, "r")
	pattern_prop_content = pattern_prop_file.read()

	pattern_event_dir = '../../prop_pattern.md'
	pattern_event_file = open(pattern_event_dir, "r")
	pattern_event_content = pattern_event_file.read()

	methods_arr = []
	methods_description_arr = []
	
	properties_arr = []
	properties_type_arr = []
	properties_description_arr = []

	events_arr = []
	events_description_arr = []

	className = "name"
	ClassDescription = "Class representing description"
	fc = open(className + '.md', 'w')
	pattern_class_content = "# " + className + "\n\n" + ClassDescription

	if events_arr:
		ln = len(events_arr)
		pattern_class_content = pattern_class_content + "\n\n## Properties\n\n"
		for index, event in enumerate(events_arr):
			file_name = events_dir + event + ".md"
			file_content = pattern_event_content.replace("eventName", event)
			file_content = file_content.replace("Description1", events_description_arr[index])
			# file_content = file_content.replace("return1", properties_type_arr[index])
			file_content = file_content.replace("className", className)
			file_content = file_content.replace("classLink", className)
			fp = open(file_name, "w")
			fp.write(file_content)
			pattern_class_content = pattern_class_content + "- [" + prop + "](./Events/" + prop + ".md)"
			if (index != ln-1): pattern_class_content = pattern_class_content + '\n'

	if properties_arr:
		ln = len(properties_arr)
		pattern_class_content = pattern_class_content + "\n\n## Properties\n\n"
		for index, prop in enumerate(properties_arr):
			file_name = properties_dir + prop + ".md"
			file_content = pattern_prop_content.replace("PropName", prop)
			file_content = file_content.replace("Description1", properties_description_arr[index])
			file_content = file_content.replace("return1", properties_type_arr[index])
			file_content = file_content.replace("className", className)
			file_content = file_content.replace("classLink", className)
			fp = open(file_name, "w")
			fp.write(file_content)
			pattern_class_content = pattern_class_content + "- [" + prop + "](./Properties/" + prop + ".md)"
			if (index != ln-1): pattern_class_content = pattern_class_content + '\n'

	if methods_arr:
		ln = len(methods_arr)
		pattern_class_content = pattern_class_content + "\n\n## Methods\n\n"
		for index, method in enumerate(methods_arr):
			file_name = methods_dir + method + ".md"
			file_content = pattern_method_content.replace("MethodName", method)
			file_content = file_content.replace("Description1", methods_description_arr[index])
			file_content = file_content.replace("className", className)
			file_content = file_content.replace("classLink", className)
			fm = open(file_name, "w")
			fm.write(file_content)
			pattern_class_content = pattern_class_content + "- [" + method + "](./Methods/" + method + ".md)"
			if (index != ln-1): pattern_class_content = pattern_class_content + '\n'
	
	fc.write(pattern_class_content)
	return


make_files()
# input('test')