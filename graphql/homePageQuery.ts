// GraphQL query build for page data
export const TABLE_DATA_QUERY = `{
  launchesPast(limit: $limit, sort: $sort) {
    id
    mission_name
    mission_id
    launch_date_local
    launch_date_utc
    launch_site {
      site_name_long
    }
    links {
      article_link
      video_link
    }
    ships {
      name
      home_port
      image
    }
  }
}`;

// GraphQL query build for mission data
export const MISSTON_QUESRY = `{
  missions(find: {id: $id}) {
    id
    description
  }
}`