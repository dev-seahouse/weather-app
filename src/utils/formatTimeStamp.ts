import { DateTime } from "luxon";

export function formatUnixTimestamp(
  timestamp: number,
  format = "dd-MM-yyyy hh:mma",
): string {
  const dateTime = DateTime.fromMillis(timestamp);

  return dateTime.toFormat(format);
}
