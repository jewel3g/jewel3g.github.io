import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Development server configuration
  server: {
    host: "::", // Listen on all IPv6 and IPv4 interfaces
    port: 8080,
    strictPort: true, // Exit if port is in use
    headers: {
      // Ensure correct MIME types for all files
      "Content-Type": "application/javascript"
    }
  },
  
  // Production build configuration
  build: {
    outDir: "dist",
    assetsInlineLimit: 4096, // 4kb
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name]-[hash][extname]",
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js"
      }
    }
  },
  
  // Plugin configuration
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      plugins: [["@swc/plugin-emotion", {}]]
    }),
    mode === 'development' && componentTagger()
  ].filter(Boolean),
  
  // Module resolution
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // Add other common aliases
      "@components": path.resolve(__dirname, "./src/components"),
      "@assets": path.resolve(__dirname, "./src/assets")
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  
  // CSS configuration
  css: {
    modules: {
      localsConvention: "camelCase"
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`
      }
    }
  },
  
  // Optimize for GitHub Pages if needed
  base: mode === 'production' ? '/your-repo-name/' : '/'
}));
