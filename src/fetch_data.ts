
import dayjs from 'dayjs';

async function fetchStats(authKey: string, cid: string, from: Date, to: Date ) {

    console.log("from", dayjs(from).format("YYYY-MM-DD HH:mm:ss"))
    console.log("to", dayjs(to).format("YYYY-MM-DD HH:mm:ss"))

    let formData = new FormData();
        formData.append('key', authKey);
        formData.append('action', 'gethisdata');
        formData.append('cid', cid);
        formData.append('begintime', dayjs(from).format("YYYY-MM-DD HH:mm:ss"));
        formData.append('endtime', dayjs(to).format("YYYY-MM-DD HH:mm:ss"));
        formData.append('typeid', '51');
        formData.append('en', '1');
        formData.append('t', (new Date()).getTime().toString());

    const res = await fetch("https://iot.epsolarpv.com/Handlers/gprsdata.ashx", {
        method: "POST",
        body: formData
    })

    return await res.json()
}


async function getAuthToken(): Promise<string> {
    const username = process.env.EPSOLAR_USERNAME
    const password = process.env.EPSOLAR_PASSWORD
    const res = await fetch(`https://iot.epsolarpv.com/Handlers/gprsdata.ashx?action=login&userName=${username}&userPwd=${password}&en=1`);
    const {userKey} = await res.json();

    return userKey;
}


let authKey = null;
export async function fetchData(cid: string, from: Date, to: Date) {
    authKey ||= await getAuthToken();

    const data = await fetchStats(authKey, cid, from, to);

    return data
}