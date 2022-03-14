import { useEffect, useState } from 'react'

import { ILaunchesPast } from "@/interfaces/index";

import { MISSTON_QUESRY } from "@/graphql/homePageQuery";
import { fetcher, getFormatedDate, getLocalStorageData } from "@/utils/functions";

type Props = {
  launch: ILaunchesPast,
}

const List = ({ launch }: Props) => {
  const [description, setDescription] = useState('');
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    let previousFavoritesFlights: any[] = getLocalStorageData();
    let index = previousFavoritesFlights?.findIndex(element => element as number == launch?.id as number);
    (index > -1) ? setSelected(true) : '';
  }, [])

  useEffect(() => {
    GetMissionData()
  }, [launch])

  const GetMissionData = async () => {
    let missionId = launch?.mission_id?.length > 0 ? launch?.mission_id?.[0] : '';
    if (missionId) {
      let requestParams = MISSTON_QUESRY;
      requestParams = requestParams?.replace(/\$id/g, `"${missionId}"`);
      const missionResponse = await fetcher(requestParams);
      if (missionResponse?.missions?.length > 0) {
        setDescription(missionResponse?.missions?.[0]?.description)
      }
    }
  }

  const addFlightsInFavorites = () => {
    setSelected(!selected)
    let previousFavoritesFlights: any[] = getLocalStorageData();
    let index = previousFavoritesFlights?.findIndex(element => element as number == launch?.id as number);
    if (index > -1) {
      previousFavoritesFlights?.splice(index, 1);
    } else {
      previousFavoritesFlights.push(launch?.id);
    }
    localStorage.setItem('fav_flights', JSON.stringify(previousFavoritesFlights));
  }

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked={selected} onChange={() => addFlightsInFavorites()} />
          <label htmlFor="checkbox-table-1" className="sr-only" >checkbox</label>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="">
            <p className="text-gray-900 whitespace-no-wrap">
              {getFormatedDate(launch?.launch_date_utc, "DD MMMM yyyy, HH:mm")}
            </p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{launch?.mission_name}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm max-w-[300px]">
        <p className="text-gray-900 whitespace-no-wrap">
          {description ? description : '-'}
        </p>
      </td>
    </tr>
  )
}

export default List;