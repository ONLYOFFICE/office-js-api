import json
from pathlib import Path

script_dir = Path(__file__).parent
missed_keys_path = script_dir / 'missed_translations.json'
target_path = script_dir / 'zh-CN.json'

with open(missed_keys_path, 'r', encoding='utf-8') as f:
    missed_keys = json.load(f)

with open(target_path, 'r', encoding='utf-8') as f:
    target = json.load(f)

added_count = 0

for key, value in missed_keys.items():
    if key not in target:
        target[key] = value
        added_count += 1
        print(f'Added: "{key[:50]}..."')
    else:
        print(f'Already exists: "{key[:50]}..."')

with open(target_path, 'w', encoding='utf-8') as f:
    json.dump(target, f, indent=4, ensure_ascii=False)

print(f'\nDone! Added {added_count} keys to zh-CN.json')
