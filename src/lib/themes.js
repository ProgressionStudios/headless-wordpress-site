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

    const resJson = await graphqlRequest(query);
    const allPortfolios = resJson.data.portfolios; // Updated to reference portfolios instead of posts

    return allPortfolios;
}