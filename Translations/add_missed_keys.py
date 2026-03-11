import json
from pathlib import Path

script_dir = Path(__file__).parent

directories = [
    'Office',
    'Plugins/Events',
    'Plugins/Methods',
]

total_added = 0

for dir_name in directories:
    missed_keys_path = script_dir / dir_name / 'missed_translations.json'
    target_path = script_dir / dir_name / 'zh-CN.json'

    if not missed_keys_path.exists():
        print(f'\n[{dir_name}] Skipped: missed_translations.json not found')
        continue

    with open(missed_keys_path, 'r', encoding='utf-8') as f:
        missed_keys = json.load(f)

    if not missed_keys:
        print(f'\n[{dir_name}] Skipped: no missed keys')
        continue

    if target_path.exists():
        with open(target_path, 'r', encoding='utf-8') as f:
            target = json.load(f)
    else:
        target = {}

    added_count = 0

    for key, value in missed_keys.items():
        if key not in target:
            target[key] = value
            added_count += 1
            print(f'[{dir_name}] Added: "{key[:50]}..."')
        else:
            print(f'[{dir_name}] Already exists: "{key[:50]}..."')

    with open(target_path, 'w', encoding='utf-8') as f:
        json.dump(target, f, indent=4, ensure_ascii=False)

    with open(missed_keys_path, 'w', encoding='utf-8') as f:
        json.dump({}, f)

    print(f'[{dir_name}] Done! Added {added_count} keys')
    total_added += added_count

print(f'\nTotal: Added {total_added} keys across all directories')
