# Deployment Strategy: OMADA Platform

The following instructions ensure a production-ready deployment for the Omada SaaS landing page.

## 1. Environment Configuration
Create a production environment in your CI/CD pipeline with the following secrets:
- `VITE_APP_URL`: The production domain (e.g., `https://omada.io`)
- `GEMINI_API_KEY`: Required if using AI features in the dashboard preview.

## 2. Global Build Command
The project uses Vite for high-performance builds. Ensure your build script matches:
```bash
npm install && npm run build
```

## 3. Provider-Specific Configs

### Vercel / Netlify
- **FrameWork Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Clean URLs**: Enabled

### Cloudflare Pages
- Root Directory: `/`
- Build System: Version 2
- Environment Variables: Standard `VITE_` prefix required for all exposed vars.

## 4. Performance Optimization
- **LCP Optimization**: Hero section components use standard `<img>` tags. Ensure your edge provider supports image optimization or use a global CDN.
- **Critical CSS**: Tailwind v4 automatically handles tree-shaking, resulting in a minimal CSS bundle (~15KB).

## 5. Security (Content Security Policy)
Ensure your headers allow connections to:
- `fonts.googleapis.com`
- `fonts.gstatic.com`
- `images.unsplash.com`
