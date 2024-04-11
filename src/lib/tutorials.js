import graphqlRequest from "./utilities/graphqlRequest";

export async function getTutorialsList() {
    const query = {
        query: `query getAllTutorials {
            tutorials(first: 500) {
              nodes {
                slug
                title
                id
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

