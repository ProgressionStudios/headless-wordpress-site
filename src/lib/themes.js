import graphqlRequest from "./graphqlRequest";

export async function getThemesList() {
  const query = {
    query: `query getAllPortfolios {
            portfolios(first: 500) {
              nodes {
                slug
                title
                progressionStudiosSubTitle
                progressionStudiosButtonLeftText
                progressionStudiosButtonLeftLink
                progressionStudiosButtonRightText
                progressionStudiosButtonRightLink
                featuredImage {
                  node {
                    srcSet(size: PROGRESSION_PORTFOLIO)
                    sourceUrl(size: PROGRESSION_PORTFOLIO)
                    sizes(size: PROGRESSION_PORTFOLIO)
                  }
                }
              }
            }
          }`
  };

  try {
    const resJson = await graphqlRequest(query);
    const allPortfolios = resJson.data.portfolios; // Ensuring direct access to portfolios
    return allPortfolios;
  } catch (error) {
    console.error("Error fetching portfolio list:", error);
    // Consider how you wish to handle this error. Return an empty object/array or throw the error further.
    throw error; // or return []; / return {};
  }
}
