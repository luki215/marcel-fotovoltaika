import { parseData } from "./parse_data";
import { saveToDB } from "./write_to_db";
import { fetchData } from "./fetch_data";
import dayjs from "dayjs";



export async function sync(from: Date, to: Date) {
    const cidsToSync = [
        // M1_00061985
        '50166', 
        // M2_00061993
        '35125',
        // M3_00061980
        '49693'
    ]

    await Promise.all(
        cidsToSync.map(async cid => {
        console.log(`fetching ${cid}`);

        const data = await fetchData(cid, from, to);
        console.log(`parsing ${cid}`);
        
        const records = await parseData(cid, dayjs(from).format('YYYY-MM-DD'), data);
        
        console.log(`saving ${cid}`);
        saveToDB(records)
        console.log(`done ${cid}`);
    }))
}