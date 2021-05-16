import '@/css/tailwind.css'

import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from 'next-themes'
import { DefaultSeo } from 'next-seo'
import Head from 'next/head'

import { SEO } from '@/components/SEO'
import LayoutWrapper from '@/components/LayoutWrapper'
import MDXComponents from '@/components/MDXComponents'

export default function App({ Component, pageProps }) {
  var swarmoptions = {
    swarmcdnkey: 'ab83abaa-95b5-4572-8be3-33aa4357e304',
    iframeReplacement: 'iframe',
    autoreplace: {
      youtube: true,
    },
    theme: {
      primaryColor: '#111927',
    },
  }
  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <script
            async
            data-cfasync="false"
            src="https://assets.swarmcdn.com/cross/swarmdetect.js"
          ></script>
        </Head>
        <DefaultSeo {...SEO} />
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </MDXProvider>
    </ThemeProvider>
  )
}
