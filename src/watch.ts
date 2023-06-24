import { CronJob } from "cron";
import dayjs from "dayjs";
import { sync } from "./sync";

new CronJob('0,15,30,45 * * * *', function() {
    // from.format(HH:mm) returns -2 hours in summer time opposed to current time
    // chinese server seems to be using current time - 1hr => adding 1hr
    const from = dayjs(new Date()).set('second', 0).set('milliseconds', 0).subtract(20, 'minutes').add(1, 'hour');
    const to = dayjs(new Date()).set('second', 59).set('milliseconds', 0).add(1, 'hour');
    sync(from.toDate(), to.toDate());
}, null, true)