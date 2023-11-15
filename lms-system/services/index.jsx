import request, {
    gql
} from "graphql-request"

const MASTER_URL = "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/" + process.env.NEXT_PUBLIC_HYGRAPH_KEY + "/master"

export const getCourseList = async () => {
    const query = gql `
    query courseList {
        courseLists {
          name
          id
          author
          tags
          totalChapters
          banner {
            url
          }
          free
          sourceCode
        }
      }
    `

    return await request(MASTER_URL, query)
}