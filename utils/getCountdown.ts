import { formatDuration, intervalToDuration } from "date-fns";

export default () => {
  const duration = intervalToDuration({
    start: new Date(2024, 0, 1),
    end: new Date(),
  });
  return formatDuration(duration, {
    delimiter: ", ",
  });
};
