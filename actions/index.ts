import { IAPIResponse } from "@/interfaces/index"
import { fetcher } from "@/utils/functions";

export const getGithubUser = (query: string): Promise<IAPIResponse> => fetcher(query).then((res) =>  {    
    return res;
})