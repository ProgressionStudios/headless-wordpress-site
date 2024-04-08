import graphqlRequest from "./graphqlRequest";

export async function getPageSlugs() {
    const query = {
        query: `query getPageSlugs {
            pages {
              nodes {
                slug
                link
                modified
              }
            }
          }`
    };

    const resJson = await graphqlRequest(query);
    const slugs = resJson.data.pages.nodes;
    return slugs;
}

export async function getPagesList() {
  const query = {
    query: `query getAllPages {
            pages(first: 10000) {
              nodes {
                slug
                link
                modified
              }
            }
          }`
  };

  const resJson = await graphqlRequest(query);
  const pages = resJson.data.pages.nodes;
  return pages;
}


export async function getSinglePage(slug) {
    const query = {
        query: `query getSinglePage {
            pages(where: {name: "${slug}"}) {
              nodes {
                content(format: RENDERED)
                date
                modified
                slug
                title(format: RENDERED)
                featuredImage {
                  node {
                    mediaItemUrl
                  }
                }
                progressionStudiosSubTitle
                seo {
                  title
                  metaDesc
                  canonical
                  opengraphTitle
                  opengraphDescription
                  opengraphSiteName
                  opengraphUrl
                  opengraphType
                }
              }
            }
          }`
    };

    const resJson = await graphqlRequest(query);
    const pageData = resJson.data.pages.nodes[0];
    return pageData;
}