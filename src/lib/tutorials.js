import graphqlRequest from "./utilities/graphqlRequest";

export async function getTutorialsList() {
    const query = {
        query: `query getAllTutorials {
            tutorials(first: 100) {
              nodes {
                slug
                title
                id
                tutorialCategories {
                  edges {
                    node {
                      slug
                    }
                  }
                }
              }
            }
          }`
    };

    try {
        const resJson = await graphqlRequest(query);
        const allTutorials = resJson.data.tutorials;
        return allTutorials;
    } catch (error) {
        console.error("Error fetching tutorials list:", error);
        // Consider how you wish to handle this error. Return an empty object/array or throw the error further.
        throw error; // or return []; / return {};
    }
}

export async function getSinglePost(slug) {
  const query = {
    query: `query getSinglePost {
            tutorial(id: "${slug}", idType: SLUG) {
              slug
              title(format: RENDERED)
              content(format: RENDERED)
              seo {
                metaDesc
              }
            }
          }`
  };

  const resJson = await graphqlRequest(query);
  const singlePost = resJson.data.tutorial;

  return singlePost;
}

export async function getPostSlugs() {
  const query = {
    query: `query getPostSlugs {
            tutorials(first: 100) {
              nodes {
                slug
              }
            }
          }`
  };

  const resJson = await graphqlRequest(query);
  const slugs = resJson.data.tutorials.nodes;
  return slugs;
}