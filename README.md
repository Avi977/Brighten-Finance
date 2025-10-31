# Brighten Australia Pty Ltd - HTML/CSS/JS Version

A standalone HTML, CSS, and JavaScript version of the Brighten Australia Pty Ltd loan application platform.

## Features

✅ **Fully Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
✅ **Multi-Step Loan Application Form** - 5-step application process with validation
✅ **Smooth Animations** - CSS and JavaScript-powered animations
✅ **Form Validation** - Real-time client-side validation
✅ **No Dependencies** - Pure HTML, CSS, and vanilla JavaScript
✅ **Modern UI** - Clean, professional design with gradient accents

## Files Included

```
Byton-Finance/
├── index.html          # Homepage with hero, loan types, benefits, stats, CTA
├── apply.html          # Multi-step loan application form
├── styles.css          # Complete styling with animations and responsive design
├── main.js             # Homepage interactions and general functionality
├── form.js             # Multi-step form logic and validation
├── public/             # Static assets folder
│   └── images/         # Images folder (contains hero image)
└── README.md           # This file
```

## Pages Completed

1. **index.html** - Homepage with:
   - Hero section with animated background
   - Loan type cards (Business & Car loans)
   - Benefits section
   - Animated statistics
   - Call-to-action section
   - Responsive navigation

2. **apply.html** - Loan application with:
   - Step 1: Loan type selection
   - Step 2: Loan details (amount & purpose)
   - Step 3a: Business details (if business loan)
   - Step 3b: Vehicle details (if car loan)
   - Step 4: Personal information
   - Step 5: Review and submit
   - Success confirmation screen

## How to Use

### 1. Setup

Simply open the files in a web browser. No build process or server required!

```bash
# Open in your default browser
open index.html
```

### 2. Image Path

The hero image is located at `public/images/mercedes hero.jpg` and is already configured in `index.html`.

### 3. Deploy

You can deploy these files to any static hosting service:
- **Vercel**: Drag and drop the folder
- **Netlify**: Drag and drop the folder
- **GitHub Pages**: Push to a gh-pages branch
- **Traditional hosting**: Upload via FTP

## Features

### Responsive Design
- Mobile-first approach
- Breakpoints at 768px (tablet) and 1024px (desktop)
- Touch-friendly navigation on mobile

### Form Validation
- Real-time validation as users type
- Email format validation
- Phone number auto-formatting
- ZIP code validation
- Minimum/maximum value checks
- Required field validation

### Animations
- Fade-in animations on scroll
- Parallax hero section
- Animated statistics counters
- Smooth page transitions
- Hover effects on cards and buttons

### Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation support
- Focus states on interactive elements

## Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --red-600: #dc2626;
    --orange-600: #ea580c;
    --yellow-400: #facc15;
    /* ... */
}
```

### Content
All content is in plain HTML and can be edited directly in the `.html` files.

### Form Fields
Add or remove form fields in `apply.html` and update validation in `form.js`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Additional Pages Needed

To complete the website, you may want to add:
- `business-loans.html` - Detailed business loan information
- `car-loans.html` - Detailed car loan information
- `contact.html` - Contact form and information
- `about.html` - Company information
- `faqs.html` - Frequently asked questions
- `legal.html` - Terms, privacy policy, licensing

## API Integration

To connect the form to a backend:

1. Update `form.js` in the `handleSubmit` function:
```javascript
// Replace the setTimeout with actual API call
fetch('/api/apply', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
})
.then(response => response.json())
.then(data => {
    // Handle success
})
.catch(error => {
    // Handle error
});
```

2. Set up your backend endpoint to receive the form data.

## Performance Tips

1. **Optimize Images**: Compress the hero image to reduce load time
2. **Lazy Loading**: Images are set up for lazy loading with the Intersection Observer API
3. **Minify CSS/JS**: For production, minify the CSS and JS files
4. **CDN**: Use a CDN for Font Awesome icons in production

## Font Awesome

Currently using Font Awesome CDN:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
```

For better performance, consider self-hosting or using a subset of icons.

## License

© 2025 Brighten Australia Pty Ltd. All rights reserved.

## Support

For issues or questions about this HTML version, please contact your development team.

---

**Note**: This is a client-side only implementation. For production use, implement proper backend API integration, database storage, and security measures.
