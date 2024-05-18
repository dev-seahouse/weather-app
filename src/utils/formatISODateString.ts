import { DateTime } from "luxon";

export function formatISODateString(
  dateString: string,
  format = "dd-MM-yyyy hh:mma",
) {
  const dateTime = DateTime.fromISO(dateString);
  return dateTime.toFormat(format);
}
