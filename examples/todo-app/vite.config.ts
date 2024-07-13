import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import { capsizeRadixPlugin } from "vite-plugin-capsize-radix"
import alegreyaSans from "@capsizecss/metrics/alegreyaSans"
import arial from "@capsizecss/metrics/arial"

console.log(arial)

export default defineConfig({
  plugins: [
    react(),
    capsizeRadixPlugin({
      // Import this file into your app after you import Radix's CSS.
      outputPath: `./public/typography.css`,
      // Pass in Capsize font metric objects.
      defaultFontStack: [alegreyaSans as any, arial as any],
    }),
  ],
})
