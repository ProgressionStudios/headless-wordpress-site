let wpUrl = process.env.NEXT_PUBLIC_WP_URL;
let siteUrl = 'https://progressionstudios.com';
export default function seoStringParser(data) {
    data = data.replaceAll(wpUrl, () => siteUrl);
    data = data.replaceAll(`${siteUrl}/wp-content`,
        () => `${wpUrl}/wp-content`);
    return data;
}