import graphqlRequest from "./utilities/graphqlRequest";

export async function getFreebiesList() {
    const query = {
        query: `query getAllFreebies {
            freebies(first: 500) {
              nodes {
                slug
                title
                id
                progressionStudiosFileDownload
                progressionStudiosSubTitle
                featuredImage {
                  node {
                    srcSet(size: PROGRESSION_FREEBIES)
                    sourceUrl(size: PROGRESSION_FREEBIES)
                    sizes(size: PROGRESSION_FREEBIES)
                  }
                }
              }
            }
          }`
    };

    try {
        const resJson = await graphqlRequest(query);
        const allFreebies = resJson.data.freebies;
        return allFreebies;
    } catch (error) {
      console.error("Error fetching freebies list:", error);
        // Consider how you wish to handle this error. Return an empty object/array or throw the error further.
        throw error; // or return []; / return {};
    }
}


export async function getSinglePost(slug) {
  const query = {
    query: `query getSinglePost {
            freebie(id: "${slug}", idType: SLUG) {
              slug
              title(format: RENDERED)
              content(format: RENDERED)
              progressionStudiosFileDownload
              progressionStudiosSubTitle
              featuredImage {
                node {
                  srcSet(size: PROGRESSION_FREEBIES)
                  sourceUrl(size: PROGRESSION_FREEBIES)
                  sizes(size: PROGRESSION_FREEBIES)
                }
              }
              seo {
                metaDesc
              }
            }
          }`
  };

  const resJson = await graphqlRequest(query);
  const singlePost = resJson.data.freebie;

  return singlePost;
}

export async function getPostSlugs() {
  const query = {
    query: `query getPostSlugs {
            freebies(first: 500) {
              nodes {
                slug
              }
            }
          }`
  };

  const resJson = await graphqlRequest(query);
  const slugs = resJson.data.freebies.nodes;
  return slugs;
}