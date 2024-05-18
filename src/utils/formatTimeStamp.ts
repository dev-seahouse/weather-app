import { DateTime } from "luxon";

export function formatTimestamp(timestamp: number): string {
  const dateTime = DateTime.fromMillis(timestamp);

  return dateTime.toFormat("dd-MM-yyyy hh:mma");
}
