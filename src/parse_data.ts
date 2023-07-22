export function parseData(cid: string, date: string, data: any) {
    const times: Array<string> = data.times;

    const records: any[][] = [];

    times.forEach((time, i) => {
        
        const [h,m,s] = time.split(':');
        let m_rounded: any = parseInt(m);
        m_rounded = m_rounded - (m_rounded % 10)
        m_rounded = m_rounded.toString().padStart(2, '0')

        const time_rounded = `${h}:${m_rounded}:00`;

        console.log(time_rounded);

        const record = [
            cid,
            `'${date} ${time_rounded}'`,
        ];

        for(let j=0; j <= 41; j++) {
            record.push(data[j][i])
        }
        records.push(record)
    })
    return records;
}
