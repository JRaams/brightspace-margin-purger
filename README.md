# brightspace-margin-purger

Avans brightspace rediculous margin purger Firefox addon / extension

![Avans Brightspace Margin Purger Icon](./icons/bmp-48.png "Avans Brightspace Margin Purger")

# Dev

1. Install deps
   `npm install`

2. Install temporary addon

- open firefox
- navigate to about:debugging#/runtime/this-firefox
- click 'Load Temporary Add-on...'
- navigate to this project directory
- open 'manifest.json'

# Create zip

`npm run zip`

Creates 'web-ext-artifacts' folder containing the addon .zip

# Why

Large bootstrap container margin :rage:

Before:
![Before picture](./assets/before.png)

After:
![After picture](./assets/after.png)
