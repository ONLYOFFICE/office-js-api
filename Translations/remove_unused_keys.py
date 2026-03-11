import json
from pathlib import Path

script_dir = Path(__file__).parent
unused_keys_path = script_dir / 'unused_translations.json'
target_path = script_dir / 'zh-CN.json'

with open(unused_keys_path, 'r', encoding='utf-8') as f:
    unused_keys = json.load(f)

with open(target_path, 'r', encoding='utf-8') as f:
    target = json.load(f)

keys_to_remove = list(unused_keys.keys())
removed_count = 0

for key in keys_to_remove:
    if key in target:
        del target[key]
        removed_count += 1
        print(f'Removed: "{key[:50]}..."')
    else:
        print(f'Not found: "{key[:50]}..."')

with open(target_path, 'w', encoding='utf-8') as f:
    json.dump(target, f, indent=4, ensure_ascii=False)

print(f'\nDone! Removed {removed_count} keys from zh-CN.json')
