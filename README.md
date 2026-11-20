# ECHO Website — beginner starter

A **free, static website** for ECHO Music Player. It uses only HTML, CSS, and JavaScript. No subscriptions, npm, or Python required.

## Open it on your Windows computer

1. Unzip the folder.
2. Open the `ECHO_Website` folder in Visual Studio Code (**File → Open Folder**).
3. Double-click `index.html` in Windows File Explorer to open the site in your browser. You can also use a VS Code extension like Live Server if you want automatic refresh while editing.

## What to edit

- `index.html` — the words, sections, links, and layout structure.
- `style.css` — colors, fonts, sizes, gradients, and animations.
- `script.js` — the mobile navigation menu and scroll-in animations.
- `assets/echo-app.png` — your current ECHO screenshot. Replace it later with a newer screenshot using the same filename.
- `assets/echo-icon.png` — your ECHO app icon.

## How to enable the actual Windows download button later

Right now the download button says **coming soon** because we haven't packaged a Windows executable or installer. Once you have a release, put it in a `downloads` folder inside this website, or upload it to a reliable host, then replace the disabled button in `index.html` with a real link, for example:

```html
<a class="button button-primary" href="downloads/ECHO-Setup.exe" download>Download ECHO for Windows</a>
```

Make sure the file **really exists** at that location before publishing. Free hosts may have file size limits, so a release page (e.g. GitHub Releases) may work better for large installers.

## Publishing for free

You can publish static sites using GitHub Pages or Cloudflare Pages on their free tiers. A custom domain name is optional and typically costs extra.

## Note

This is a fan-designed personal project site with an original ECHO look. Screenshot included is from ECHO development and may not show the latest app version.
