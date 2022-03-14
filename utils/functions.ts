import moment from 'moment';

/**
 * Middleware for call CMS API using next API routes
 * @param {*} query
 * @returns
 */
const fetcher = async (query) => {
    const res = await fetch(`api/graphql`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({ query }),
    });

    return res.json();
};

const getFormatedDate = (date: string, format: string) => {
    let formatDate = date;
    if (date !== '') {
        formatDate = moment(date).format(format);
    }
    return formatDate;
};

const getLocalStorageData = () => {
    let previousFavoritesFlights: any[] = JSON.parse(localStorage.getItem('fav_flights')) || [] as any;
    return previousFavoritesFlights
}


export { fetcher, getFormatedDate, getLocalStorageData }