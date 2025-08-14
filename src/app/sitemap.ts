import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.sellhousefast.local";
  
  const californiaCities = [
    'los-angeles',
    'san-francisco', 
    'san-diego',
    'sacramento',
    'oakland',
    'fresno',
    'long-beach',
    'bakersfield'
  ];
  
  const washingtonCities = [
    'seattle',
    'spokane',
    'tacoma',
    'vancouver',
    'bellevue',
    'everett',
    'kent',
    'yakima'
  ];
  
  const cityUrls = [
    ...californiaCities.map(city => `${base}/california/${city}`),
    ...washingtonCities.map(city => `${base}/washington/${city}`)
  ];
  
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/california`, lastModified: new Date() },
    { url: `${base}/washington`, lastModified: new Date() },
    { url: `${base}/privacy`, lastModified: new Date() },
    { url: `${base}/terms`, lastModified: new Date() },
    ...cityUrls.map(url => ({ url, lastModified: new Date() }))
  ];
} 