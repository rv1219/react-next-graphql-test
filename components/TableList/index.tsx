import * as React from 'react'

// Import all required component here
import asyncComponent from '@/common/asyncComponent';
const List = asyncComponent(() => import("@/components/List"));

// Import interface 
import { ILaunchesPast } from "@/interfaces/index"

type Props = {
	launchesPast: ILaunchesPast[]
}

const TableList = ({ launchesPast }: Props) => {
	return (
		<table className="min-w-full leading-normal">
			<thead>
				<tr>
					<th
						className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
						Favorite
					</th>
					<th
						className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
						Data
					</th>
					<th
						className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
						Mission name
					</th>
					<th
						className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
						Description
					</th>
				</tr>
			</thead>
			{/* <tbody>
				{
					launchesPast?.map((item, index) => <List launch={item} key={index} />)
				}
			</tbody> */}
		</table>
	)

}
export default TableList
