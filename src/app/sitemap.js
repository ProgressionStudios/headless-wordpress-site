import { getPagesList } from "../lib/pages";
import parse from 'html-react-parser';
import seoStringParser from "../lib/seoStringParser";

export default async function sitemap() {
    const pages = await getPagesList();

    const sitemapEntries = pages.map(page => ({
        url: parse(seoStringParser(page.link)),
        lastModified: page.modified,
    }));

    return sitemapEntries;
}
