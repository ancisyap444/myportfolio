# Francis Vernard Yap — Developer Portfolio

A fast, single-page, dark-mode developer portfolio landing page built with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Framer Motion**. Engineered with a dark IDE / terminal aesthetic, glowing green accents (`#39FF88`), responsive layouts, and full accessibility.

---

## ⚡ Tech Stack

- **Framework**: React 19 + Vite (TypeScript)
- **Styling**: Tailwind CSS (custom theme tokens, glow utilities, dark mode `#06090A`)
- **Typography**: Space Grotesk (display), Inter (sans body), JetBrains Mono (code/eyebrows)
- **Animations**: Framer Motion (staggered hero entrance, scroll reveals, micro-interactions)
- **Form Handling & Validation**: React Hook Form + Zod
- **Icons**: Lucide React + custom SVG icons
- **Contact Backend**: Vercel Serverless Function (`/api/contact`) with Resend (plus Web3Forms fallback support)
- **Deployment**: Vercel

---

## 🎨 Design System Tokens

| Element | Token / Value | Description |
| :--- | :--- | :--- |
| **Background** | `#06090A` | Near-black with faint green undertone |
| **Primary Accent** | `#39FF88` | Glowing terminal green |
| **Primary Muted** | `#1B4332` | Subtle badge fills and borders |
| **Surface** | `rgba(255, 255, 255, 0.03)` | Frosted glass cards |
| **Border** | `rgba(120, 255, 170, 0.08)` | Technical subtle border |
| **Glow Utility** | `0 0 24px rgba(57, 255, 136, 0.35)` | Box-shadow on hover/focus |
| **Border Radius** | `14px` (`rounded-[14px]`) | Consistent component geometry |

---

## 🚀 Quick Start

### 1. Clone & Install
```bash
git clone https://github.com/francisyap/myporfolio.git
cd myporfolio
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
npm run preview
```

---

## 📬 Contact Form Backend Setup

### Option A: Vercel Serverless Function + Resend (Default)
1. Sign up for free at [resend.com](https://resend.com) and generate an API key.
2. In your Vercel Project Settings under **Environment Variables**, add:
   - `RESEND_API_KEY`: `re_your_api_key_here`
   - `CONTACT_RECIPIENT_EMAIL`: `yapfrancis555@gmail.com` (optional, defaults to this address)
3. Deploy to Vercel. Submissions to `/api/contact` will automatically forward to your inbox.

### Option B: Web3Forms (Zero Backend Code Fallback)
If you prefer not using serverless functions:
1. Obtain an Access Key at [web3forms.com](https://web3forms.com).
2. In `src/components/Contact.tsx`, swap the `/api/contact` fetch call with the Web3Forms endpoint documented in the comments:
```typescript
const response = await fetch("https://api.web3forms.com/submit", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
    ...data
  }),
});
```

---

## 📄 CV / Resume Download
The CV file is located at `public/francis-vernard-yap-cv.pdf`. To replace it with an updated PDF:
1. Save your new resume PDF as `public/francis-vernard-yap-cv.pdf`.
2. The navbar and hero download buttons will automatically deliver your updated document.

---

## 🚢 Deployment to Vercel

1. Initialize git and push to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: initial dark developer portfolio"
   git remote add origin https://github.com/your-username/your-repo.git
   git push -u origin main
   ```
2. Import the repository into [Vercel](https://vercel.com).
3. Set your `RESEND_API_KEY` in environment variables.
4. Deploy!
