import { NextApiRequest, NextApiResponse } from 'next'
import { GraphQLClient } from "graphql-request";
import { CMS_ENDPOINT } from "@/constants/constants";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;

  let query = body?.query;
  

  let graphqlRequest = {
    query: `${query}`,
  };
  const client = new GraphQLClient(CMS_ENDPOINT);

  const response = await client.request(`${graphqlRequest?.query}`, {
    variables: {},
  });

  if (response) {
    res.status(200).json(response);
  } else {
    res.json(response);
  }
  res.end();
};
export default handler;
