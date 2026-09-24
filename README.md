# drewedale.github.io

Personal portfolio for Drew Dale, built as a lightweight static site for GitHub Pages. The home page introduces the work and links to four dedicated category pages. Project content is reached by following those links, rather than scrolling through a single long home page.

## Files

- `index.html` — hero, featured links, and category navigation
- `engineering.html`, `audio-coding.html`, `events.html`, `artists.html` — work by category
- `about.html` — about, leadership, experience, and contact
- `style.css` — layout, colors, responsive design, and motion
- `script.js` — mobile menu, visual enhancements, and redirects for old home-page project anchors
- `andra/` — standalone Andra artist website

## Updating the site

Edit the relevant category page for work content and `index.html` for the hero or category links. Keep project images in `assets/` and use short, lowercase filenames without spaces. When moving a project to another page, update its old-anchor mapping in `script.js`.

## Selected media and source archives

The engineering page includes selected releases, the “Lovely” recording and original composition audio players, and a live talk recording. Event photographs and artist/release projects have their own pages. The home page links to separate music and event résumés. The audio coding page links to the separate public MATLAB repositories for concatenative timbre synthesis and audio DSP experiments. Their READMEs describe requirements and verification limits.

The Kinected DJ case study includes a compressed performance video, layout montage, scholarly project paper, and a source archive containing the main Max instrument plus directly referenced companion patches. The archive's README notes hardware and external package requirements; the source has been inspected but not run with the original Kinect setup. The Fauna of Mirrors III entry includes its performance video and a Max source patch archive. The original large WAV media files for that work are not hosted here; see the archive README for the required files and routing.

The public repository for this portfolio is [drewedale/drewedale.github.io](https://github.com/drewedale/drewedale.github.io). The `andra/` directory contains the standalone artist site.
