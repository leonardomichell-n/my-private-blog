# README.md
# Privacy-First Personal Blog

A static HTML blog with password protection and email functionality, hosted on Netlify.

## Setup Instructions

### 1. Get Your Domain
- Register a domain (Namecheap, Google Domains, etc.)

### 2. Create Accounts
- Sign up for [Netlify](https://netlify.com) (free)
- Sign up for [Resend](https://resend.com) (free tier: 100 emails/day)

### 3. Configure Resend
- Add and verify your domain in Resend dashboard
- Generate an API key
- Copy the API key (you'll need it for Netlify)

### 4. Deploy to Netlify

**Option A: Via GitHub (Recommended)**
1. Create a GitHub repository
2. Upload all these files to the repo
3. Go to Netlify → "Add new site" → "Import from Git"
4. Select your repository
5. Deploy!

**Option B: Drag & Drop**
1. Go to Netlify dashboard
2. Drag the folder containing all files into Netlify
3. Site will deploy automatically

### 5. Set Environment Variables in Netlify
1. Go to Site Settings → Environment Variables
2. Add these three variables:
   - `SITE_PASSWORD`: Your chosen password for the site
   - `YOUR_EMAIL`: Where you want to receive messages
   - `RESEND_API_KEY`: Your Resend API key

### 6. Connect Your Domain
1. In Netlify: Site Settings → Domain Management
2. Add your custom domain
3. Follow Netlify's instructions to update DNS

## File Structure
```
your-site/
├── index.html              # Main blog page
├── login.html              # Password protection page
├── netlify.toml            # Netlify configuration
├── package.json            # Project metadata
├── netlify/
│   └── functions/
│       ├── auth.js         # Password checking
│       └── send-email.js   # Email sending
└── README.md
```

## Editing Your Blog
Simply edit `index.html` to add new posts. Each post is an `<article>` section.

## Privacy Features
✓ No analytics or tracking
✓ No third-party scripts
✓ No cookies except essential auth cookie
✓ Self-hosted fonts (system fonts)
✓ No external dependencies

## Support
- [Netlify Docs](https://docs.netlify.com)
- [Resend Docs](https://resend.com/docs)