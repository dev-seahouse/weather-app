import { cn } from "@/utils/cn";

import cloudImg from "../../../assets/cloud.png";
import sunnyImg from "../../../assets/sun.png";

export function WeatherIcon({ whetherCode = 700 }: { whetherCode?: number }) {
  const containerClass = cn(`
    absolute right-3 top-[-70px]

    sm:top-[-90px]
  `);

  const imgClass = cn(`
    size-[10.5rem]

    sm:size-[290px]
  `);

  function startsWithEight(num: number) {
    const numStr = num.toString();
    return numStr.charAt(0) === "8";
  }

  // based on openWeather, a good weather have weather id 8xx
  function isSunny(num: number) {
    return startsWithEight(num);
  }

  return (
    <div className={containerClass}>
      {isSunny(whetherCode) ? (
        <img src={sunnyImg} alt="good weather" className={imgClass} />
      ) : (
        <img src={cloudImg} alt="bad weather" className={imgClass} />
      )}
    </div>
  );
}
