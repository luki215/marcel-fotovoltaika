import * as mysql from 'mysql2';


export async function saveToDB(records: any[][]) {
  const connectionStr = 'mysql://stats:password@stats_db:3306/stats'
  const connection = mysql.createConnection(connectionStr)

  let sql = `INSERT IGNORE INTO fv_data VALUES
    `
    records.forEach((r, i) => {
        sql += `( ${r.join(',')} )`
        if(i < records.length - 1) {
            sql += `,
        `}
        
    })

  const results = await connection.execute(sql)

  connection.end()

}

