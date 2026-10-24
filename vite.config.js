import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

const sylvanMeta = {
  title: 'Managed Farm Land for Sale in Doddaballapur, North Bangalore | Samrudhi',
  description:
    'Explore managed farm land for sale in Doddaballapur, North Bangalore, with Samrudhi. Discover your ideal farmland investment opportunity today!',
  url: 'https://thesamrudhi.com/sylvan-retreat',
}

function applySylvanMeta(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${sylvanMeta.title}</title>`)
    .replace(
      /<meta\s+name=["']title["']\s+content=["'][^"']*["']\s*\/?>/i,
      `<meta name="title" content="${sylvanMeta.title}" />`
    )
    .replace(
      /<meta\s+name=["']description["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
      `<meta name="description" content="${sylvanMeta.description}" />`
    )
    .replace(
      /<meta\s+property=["']og:title["']\s+content=["'][^"']*["']\s*\/?>/i,
      `<meta property="og:title" content="${sylvanMeta.title}" />`
    )
    .replace(
      /<meta\s+property=["']og:description["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
      `<meta property="og:description" content="${sylvanMeta.description}" />`
    )
    .replace(
      /<meta\s+property=["']og:url["']\s+content=["'][^"']*["']\s*\/?>/i,
      `<meta property="og:url" content="${sylvanMeta.url}" />`
    )
    .replace(
      /<meta\s+property=["']twitter:title["']\s+content=["'][^"']*["']\s*\/?>/i,
      `<meta property="twitter:title" content="${sylvanMeta.title}" />`
    )
    .replace(
      /<meta\s+property=["']twitter:description["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
      `<meta property="twitter:description" content="${sylvanMeta.description}" />`
    )
    .replace(
      /<meta\s+property=["']twitter:url["']\s+content=["'][^"']*["']\s*\/?>/i,
      `<meta property="twitter:url" content="${sylvanMeta.url}" />`
    )
    .replace(
      /<link\s+rel=["']canonical["']\s+href=["'][^"']*["']\s*\/?>/i,
      `<link rel="canonical" href="${sylvanMeta.url}" />`
    )
}

function sylvanRetreatMetaPlugin() {
  let outDir = 'build'

  return {
    name: 'sylvan-retreat-meta',
    configResolved(config) {
      outDir = config.build.outDir || 'build'
    },
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.originalUrl || req.url || ''
        if (url === '/sylvan-retreat' || url === '/sylvan-retreat/' || url.startsWith('/sylvan-retreat?')) {
          try {
            const indexHtmlPath = path.resolve(__dirname, 'index.html')
            let template = fs.readFileSync(indexHtmlPath, 'utf-8')
            template = applySylvanMeta(template)
            const html = await server.transformIndexHtml(req.url, template)
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/html; charset=utf-8')
            return res.end(html)
          } catch (e) {
            return next(e)
          }
        }
        next()
      })
    },
    transformIndexHtml(html, ctx) {
      const currentUrl = ctx?.originalUrl || ctx?.path || ''
      if (currentUrl.includes('/sylvan-retreat')) {
        return applySylvanMeta(html)
      }
      return html
    },
    closeBundle() {
      try {
        const rootIndex = path.resolve(outDir, 'index.html')
        if (fs.existsSync(rootIndex)) {
          const originalHtml = fs.readFileSync(rootIndex, 'utf-8')
          const modifiedHtml = applySylvanMeta(originalHtml)
          const targetDir = path.resolve(outDir, 'sylvan-retreat')
          if (!fs.existsSync(targetDir)) {
            fs.mkdirSync(targetDir, { recursive: true })
          }
          fs.writeFileSync(path.resolve(targetDir, 'index.html'), modifiedHtml, 'utf-8')
        }
      } catch (err) {
        console.error('Failed to generate sylvan-retreat static html:', err)
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sylvanRetreatMetaPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'build',
    sourcemap: true,
  },
})
