import { type ClassValue, clsx } from "clsx"
import { Metadata } from "next"
import { describe } from "node:test"
import { twMerge } from "tailwind-merge"
import { boolean } from "zod"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function absoluteUrl(path: string) {
  if(typeof window !== "undefined") return path
  if(process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}${path}`
  return `http://localhost:${process.env.PORT ?? 3000}${path}`
}

export function constructMetadata({
  title = "CTYP by Nikolas",
  description = "CTYP is an open-source software",
  image = "/thumbnail.png",
  icons = "/favicon.ico",
  noIndex = false
} : {
  title?: string,
  description?: string,
  image?: string,
  icons?: string,
  noIndex?: boolean
} = {}): Metadata{
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{
        url: image
      }]
    },
    icons,
    metadataBase: new URL('https://ctyp.vercel.app'),
    themeColor: '#FFF',
    ...(noIndex && {
      robots: {
        index: false,
        follow: false
      }
    })
  }
}