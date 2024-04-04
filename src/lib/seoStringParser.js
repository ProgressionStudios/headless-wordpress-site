let wpUrl = 'https://progressionstudios.com/headless';
let siteUrl = 'https://progressionstudios.com';
export default function seoStringParser(data) {
    data = data.replaceAll(wpUrl, () => siteUrl);
    data = data.replaceAll(`${siteUrl}/wp-content`,
        () => `${wpUrl}/wp-content`);
    return data;
}