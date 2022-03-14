type TlaunchSite = {
  site_name_long: string
}

type Tlinks = {
  article_link: string,
  video_link: string
}

type TCore = {
  reuse_count: number,
  status: string
}

type Tcores = {
  flight: number
  core: TCore
}

type TFirstStage = {
  cores: [Tcores]
}

type TPayloadList = {
  payload_type: string,
  payload_mass_kg: number,
  payload_mass_lbs: number
}

type TPayloads = {
  payloads: [TPayloadList]
}

type TrocketType = {
  rocket_name: string,
  first_stage: TFirstStage,
  second_stage: TPayloads
}

type TShips = {
  name: string,
  home_port: string,
  image: string
}

export interface IAPIResponse {
  launchesPast: ILaunchesPast[]
}

export interface ILaunchesPast {
  id: string | number,
  mission_name: string,
  mission_id: Array<string>,
  launch_date_local: string,
  launch_date_utc: string,
  launch_site: TlaunchSite,
  links: Tlinks,
  ships: Array<TShips>,
  selected?: boolean
}

export interface IGlobalState {
  tableDataList: ILaunchesPast[],
}