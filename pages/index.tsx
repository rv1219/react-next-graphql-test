import { useEffect, useState } from 'react'
import { GetStaticProps } from 'next';

// Import all required component here
import asyncComponent from '@/common/asyncComponent';
const TableList = asyncComponent(() => import("@/components/TableList"));

// Import interface 
import { IAPIResponse, ILaunchesPast } from "@/interfaces/index"

// Import context related things
import { getGithubUser } from "@/actions/index";
import { useGlobalDispatch } from "@/context/GlobalContext";
import { setApiData } from '@/context/action';

// Import graphQL query variable
import { TABLE_DATA_QUERY } from "@/graphql/homePageQuery";


type Props = {
  launchesPast: ILaunchesPast[]
}

const IndexPage = () => {

  const [limit, setLimit] = useState(10);
  const [sortBy, setSortBy] = useState('launch_date_utc')
  const [launchesPast, setLaunchesPast] = useState([])

  const dispatch = useGlobalDispatch();

  useEffect(() => {
    setTimeout(() => {
      getDataFromServer()
    }, 500);

  }, [sortBy])

  const getDataFromServer = async () => {
    let requestParams = TABLE_DATA_QUERY;
    requestParams = requestParams?.replace(/\$limit/g, `${limit}`);
    requestParams = requestParams?.replace(/\$sort/g, `"${sortBy}"`);

    const response: IAPIResponse = await getGithubUser(requestParams);
    setLaunchesPast(response?.launchesPast || [])
  }

  useEffect(() => {
    dispatch(setApiData({ launchesPast: launchesPast }))
  }, [launchesPast])
  return (
    <>
      <section className="container">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <div className="px-4 md:px-10 py-4 md:py-7">
              <div className="flex items-center justify-between">
                <p className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Tasks</p>
                <div className="py-3 px-4 flex items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded border-2 drop-shadow-md" >
                  <p>Sort By:</p>
                  <select aria-label="select" name={sortBy} onChange={(e) => setSortBy(e.target.value)} className="focus:text-indigo-600 focus:outline-none bg-transparent ml-1">
                    <option className="text-sm text-indigo-800" value="launch_date_utc" >Data</option>
                    <option className="text-sm text-indigo-800" value="mission_name" >Mission Name</option>
                  </select>
                </div>
              </div>
            </div>
            <TableList launchesPast={launchesPast} />
          </div>
        </div>
      </section>
    </>
  )
}

export default IndexPage


// export const getStaticProps: GetStaticProps = async () => {
//   const response: IAPIResponse = await getGithubUser(TABLE_DATA_QUERY);
//   console.log('response', response)
//   return {
//     props: {
//       launchesPast: response?.launchesPast || []
//     },
//   };
// }