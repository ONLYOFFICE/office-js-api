import os

# Получаем абсолютный путь к текущей директории
current_dir = os.path.abspath(os.getcwd())

# Шаг 1: Пройтись по всем папкам внутри папки Word текущей директории
word_dir = os.path.join(current_dir, "Word")
word_folders = [folder for folder in os.listdir(word_dir) if os.path.isdir(os.path.join(word_dir, folder))]

for folder in word_folders:
    # Шаг 2: Пройтись по каждой папке Methods из подпапок шага 1
    methods_dir = os.path.join(word_dir, folder, "Methods")
    if os.path.exists(methods_dir):
        # Шаг 3: Объединить контент всех файлов .md папки Methods в один файл
        combined_content = "\n"
        for root, _, files in os.walk(methods_dir):
            for file in files:
                if file.endswith(".md"):
                    file_path = os.path.join(root, file)
                    with open(file_path, "r", encoding="utf-8") as f:
                        combined_content += '\n' + f.read()

        # Записать объединенный контент в файл с именем родительской папки для папки Methods
        parent_folder_name = os.path.basename(os.path.dirname(methods_dir))
        output_file_path = os.path.join(current_dir, f"{parent_folder_name}_combined.md")
        with open(output_file_path, "w", encoding="utf-8") as f:
            f.write(combined_content)

# Шаг 4: Объединить все объединённые файлы в новый файл
output_combined_file = os.path.join(current_dir, "WORD_API.md")
with open(output_combined_file, "w", encoding="utf-8") as output_file:
    for folder in word_folders:
        parent_folder_name = os.path.basename(folder)
        methods_combined_file_path = os.path.join(current_dir, f"{parent_folder_name}_combined.md")
        if os.path.exists(methods_combined_file_path):
            output_file.write(f"Bellow description for {parent_folder_name}\n")
            with open(methods_combined_file_path, "r", encoding="utf-8") as methods_combined_file:
                output_file.write(methods_combined_file.read())
            output_file.write("\n\n")
