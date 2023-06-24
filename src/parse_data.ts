export function parseData(cid: string, date: string, data: any) {
    const times: Array<string> = data.times;

    const records: any[][] = [];

    times.forEach((time, i) => {
        const record = [
            cid,
            `'${date} ${time}'`,
        ];

        for(let j=0; j <= 41; j++) {
            record.push(data[j][i])
        }
        records.push(record)
    })
    return records;
}
