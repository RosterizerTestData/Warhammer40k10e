import os
import json
from collections import defaultdict

def find_duplicate_values():
    rulebook_directory = os.getcwd()
    rulebook_files = [f for f in os.listdir(rulebook_directory) if f.endswith(".rulebook")]

    for file_name in rulebook_files:
        file_path = os.path.join(rulebook_directory, file_name)
        with open(file_path, encoding='utf-8') as f:
            data = json.load(f)

        if "rulebook" in data and "assetCatalog" in data["rulebook"]:
            asset_catalog = data["rulebook"]["assetCatalog"]
            changes_made = rename_wargear_to_weapon(asset_catalog)
            duplicates = find_duplicate_keys(asset_catalog)
            modified_data = data
            if duplicates:
                changes_made = True
                modified_data = modify_json_data(data, duplicates)

            if changes_made:
                # Increment the third number in the "revision" key
                increment_revision(modified_data)

                # Overwrite the original file with modified JSON
                save_modified_json(modified_data, file_path)

def find_duplicate_keys(data):
    duplicates = defaultdict(list)
    seen_values = defaultdict(list)

    def check_duplicate(key, value):
        if key in seen_values:
            if value not in duplicates[key]:
                duplicates[key].append(seen_values[key])
                duplicates[key].append(value)
        else:
            seen_values[key] = value

    if isinstance(data, dict):
        for key, value in data.items():
            if isinstance(key, str) and "§" in key:
                parts = key.split("§")
                if len(parts) == 2 and (parts[0] == "Melee Weapon" or parts[0] == "Ranged Weapon"):
                    check_duplicate(parts[1], key)
    return duplicates

def modify_json_data(data, duplicates):
    modified_data = data.copy()
    new_assets = {}

    for key, values in duplicates.items():
        designation = key
        name = designation.split("—")[1]
        new_asset = f"Weapon§{designation}"
        new_assets[new_asset] = {
            "assets": {
                "traits": values
            },
            "stats": {
                "weaponName": {
                    "value": name
                }
            },
            "keywords": {
                "Tags": ["Multi-weapon"]
            }
        }

        # Replace duplicate traits with newAsset value
        replace_duplicates(modified_data, values, new_asset)

    modified_data["rulebook"]["assetCatalog"].update(new_assets)
    return modified_data

def replace_duplicates(data, duplicates, new_asset):
    if isinstance(data, dict):
        for key, value in data.items():
            if key == "traits":
                duplicate_found = False
                items_to_keep = []
                for i, item in enumerate(value):
                    if item in duplicates:
                        if not duplicate_found:
                            duplicate_found = True
                            items_to_keep.append(new_asset)
                    elif "trait" in item and item["trait"] in duplicates:
                        if not duplicate_found:
                            duplicate_found = True
                            item["trait"] = new_asset
                            items_to_keep.append(item)
                    else:
                        items_to_keep.append(item)
                if duplicate_found:
                    data[key] = items_to_keep
            else:
                replace_duplicates(value, duplicates, new_asset)
    elif isinstance(data, list):
        for i, item in enumerate(data):
            replace_duplicates(item, duplicates, new_asset)

def increment_revision(data):
    if "revision" in data:
        version_numbers = data["revision"].split(".")
        if len(version_numbers) == 3:
            version_numbers[2] = str(int(version_numbers[2]) + 1)
            data["revision"] = ".".join(version_numbers)

def save_modified_json(data, file_path):
    with open(file_path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

def rename_wargear_to_weapon(data):
    changes_made = False
    keys_to_remove = []
    items_to_add = {}
    name_replacements = {}
    for key, value in data.items():
        if key.startswith("Wargear§"):
            if "keywords" in value and "Tags" in value["keywords"] and "Multi-weapon" in value["keywords"]["Tags"]:
                changes_made = True
                new_key = key.replace("Wargear§", "Weapon§")
                if "stats" in value and "wargearName" in value["stats"]:
                    value["stats"]["weaponName"] = value["stats"].pop("wargearName")
                keys_to_remove.append(key)
                items_to_add[new_key] = value
                name_replacements[key] = new_key

    for old_key in keys_to_remove:
        data.pop(old_key)

    for key, value in items_to_add.items():
        data[key] = value

    replace_wargear_refs(data, name_replacements)

    return changes_made

def replace_wargear_refs(data, name_replacements):
    if isinstance(data, dict):
        for key, value in data.items():
            if isinstance(value, list):
                for old_name, new_name in name_replacements.items():
                    if old_name in value:
                        value.remove(old_name)
                        value.append(new_name)
                        data[key] = value

            if isinstance(value, str) and value in name_replacements:
                data[key] = name_replacements[value]
            else:
                replace_wargear_refs(value, name_replacements)
    elif isinstance(data, list):
        for item in data:
            replace_wargear_refs(item, name_replacements)

find_duplicate_values()
