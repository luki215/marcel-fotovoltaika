import dayjs from "dayjs";
import { sync } from "./sync";

const sync_debug = async () => {
const from = new Date();
  const to = dayjs(from).add(1, 'h').toDate();
await sync(from, to);

}

sync_debug();