import graphqlRequest from "./utilities/graphqlRequest";

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

  try {
    const resJson = await graphqlRequest(query);
    return resJson.data.pages.nodes;
  } catch (error) {
    console.error("Error fetching page slugs:", error);
    throw error; // Or return an appropriate fallback
  }
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

  try {
    const resJson = await graphqlRequest(query);
    return resJson.data.pages.nodes;
  } catch (error) {
    console.error("Error fetching pages list:", error);
    throw error; // Or return an appropriate fallback
  }
}



export async function getSinglePage(slug) {
  const query = {
    query: `query getSinglePage($slug: String!) {
            pages(where: {name: $slug}) {
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
          }`,
    variables: {
      slug: slug
    }
  };

  try {
    const resJson = await graphqlRequest(query);
    return resJson.data.pages.nodes[0]; // Assuming there's always at least one node
  } catch (error) {
    console.error("Error fetching single page:", error);
    throw error; // Or return an appropriate fallback
  }
}
