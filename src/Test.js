import {useQuery} from 'react-query';
import Testing from './Testing.js'

const link = ''; //insert api key/endpoint here
//testing commit changes

const fetchData = async () => {
    const res = await fetch(link, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }); //await to fetch all data before storing it in res (response)
    return res.text(); //return the response
}

const Test = () => {
    const {data, status} = useQuery('blueprint', fetchData);
    console.log(data);
    console.log(status);

    return ( 
        <div>
            <h2>epic</h2>

            {status === 'loading' && (
                <div>Loading Data...</div>
            )}

            {status === 'error' && (
                <div>Error Loading Data...</div>
            )}

            {status === 'success' && (
                <div>
                    {/* {data.results.map(planet => <Testing key={planet.body} planet={planet} />)} */}
                </div>
            )}
        </div>
     );
}
 
export default Test;