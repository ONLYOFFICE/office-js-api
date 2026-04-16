import json
from pathlib import Path

script_dir = Path(__file__).parent

directories = [
    'Office',
    'Plugins/Events',
    'Plugins/Methods',
]

total_removed = 0

for dir_name in directories:
    unused_keys_path = script_dir / dir_name / 'unused_translations.json'
    target_path = script_dir / dir_name / 'zh-CN.json'

    if not unused_keys_path.exists():
        print(f'\n[{dir_name}] Skipped: unused_translations.json not found')
        continue

    with open(unused_keys_path, 'r', encoding='utf-8') as f:
        unused_keys = json.load(f)

    if not unused_keys:
        print(f'\n[{dir_name}] Skipped: no unused keys')
        continue

    if not target_path.exists():
        print(f'\n[{dir_name}] Skipped: zh-CN.json not found')
        continue

    with open(target_path, 'r', encoding='utf-8') as f:
        target = json.load(f)

    removed_count = 0

    for key in unused_keys.keys():
        if key in target:
            del target[key]
            removed_count += 1
            print(f'[{dir_name}] Removed: "{key[:50]}..."')
        else:
            print(f'[{dir_name}] Not found: "{key[:50]}..."')

    with open(target_path, 'w', encoding='utf-8') as f:
        json.dump(target, f, indent=4, ensure_ascii=False)

    with open(unused_keys_path, 'w', encoding='utf-8') as f:
        json.dump({}, f)

    print(f'[{dir_name}] Done! Removed {removed_count} keys')
    total_removed += removed_count

print(f'\nTotal: Removed {total_removed} keys across all directories')
