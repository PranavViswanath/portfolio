# Pranav Viswanath — Personal Site

A minimal, fast personal website inspired by vikranth.com. Built with vanilla HTML, CSS, and JavaScript.

## Features

- ✨ Clean, minimal design with strong typography
- 🌙 Automatic dark/light mode support
- 📱 Mobile-first responsive design
- ⚡ Fast loading (< 20KB total)
- 🕐 Live time display (updates every minute)
- ♿ Accessible and semantic HTML
- 🔍 SEO optimized with Open Graph tags

## Project Structure

```
portfolio/
├── index.html          # Main homepage
├── beliefs.html        # Fundamental beliefs page
├── blog/
│   └── index.html      # Blog index (stub)
├── styles.css          # Main stylesheet
├── script.js           # Time update functionality
└── README.md           # This file
```

## Customization

### 1. Personal Information

Update the following in `index.html`:

- **Name**: Change "Pranav" to your name
- **Location**: Update "Westmont, IL" to your city
- **Age**: Modify "21 y/o" to your age
- **Current role**: Replace "your role at your company" with your actual position
- **Past work**: Update the domains you've worked in
- **Community role**: Replace "your org" with your organization details

### 2. Social Links

Update all the placeholder links in the "links" section:

```html
<a href="https://substack.com/@YOUR" target="_blank" rel="noopener noreferrer">substack</a>
<a href="https://www.linkedin.com/in/YOUR" target="_blank" rel="noopener noreferrer">linkedin</a>
<a href="https://twitter.com/YOUR" target="_blank" rel="noopener noreferrer">twitter</a>
<a href="https://github.com/YOUR" target="_blank" rel="noopener noreferrer">github</a>
<a href="https://scholar.google.com/citations?user=YOUR" target="_blank" rel="noopener noreferrer">google scholar</a>
<a href="mailto:YOUR@domain.com?subject=Hello%20Pranav">email</a>
```

### 3. SEO & Metadata

Update the following in `index.html`:

- **Page title**: "Pranav Viswanath — Building AI Systems"
- **Meta description**: Your brief description
- **Open Graph URL**: Your actual domain
- **Favicon**: Currently uses a brain emoji (🧠) - you can replace with your own

### 4. Styling

The design uses CSS custom properties for easy theming:

```css
:root {
  --bg: #fafafa;        /* Light mode background */
  --fg: #111;           /* Light mode text */
  --muted: #555;        /* Light mode muted text */
  --link: #0a58ff;      /* Light mode links */
  --maxw: 700px;        /* Max content width */
}
```

## Deployment

### Option 1: GitHub Pages
1. Push this repository to GitHub
2. Go to Settings → Pages
3. Select "Deploy from a branch" and choose `main`
4. Your site will be available at `https://username.github.io/repository-name`

### Option 2: Netlify
1. Drag and drop the entire folder to [netlify.com](https://netlify.com)
2. Your site will be deployed instantly
3. You can connect a custom domain later

### Option 3: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts to deploy

## Future Enhancements

- [ ] Add actual blog posts (markdown support)
- [ ] Implement RSS feed
- [ ] Add analytics (Plausible/Umami)
- [ ] Create a projects showcase
- [ ] Add a contact form
- [ ] Implement search functionality

## Performance

The site is optimized for speed:
- No external dependencies
- System fonts only (no web fonts)
- Minimal JavaScript (time updates only)
- Compressed CSS and HTML
- Total page weight: ~15KB

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers
- Progressive enhancement for older browsers

## License

This project is open source and available under the [MIT License](LICENSE).
