export function DisplayWeather() {
  return (
    <div
      className={`
        w-full max-w-md rounded-lg p-6 text-white

        sm:max-w-full
      `}
    >
      <div className="mb-2 text-xl font-semibold">Today&apos;s Weather</div>
      <div className="flex items-end justify-between">
        <div>
          <div className="text-6xl font-bold leading-none">26°</div>
          <div className="mt-1 text-sm">H: 29° L: 26°</div>
          <div className="mt-2 text-xl font-semibold">Johor, MY</div>
        </div>
        <div
          className={`
            flex flex-col justify-end text-right

            sm:flex-row sm:items-end sm:space-x-4
          `}
        >
          <div
            className={`
              mt-auto

              sm:mt-0 sm:text-right
            `}
          >
            <div>01-09-2022 09:41am</div>
          </div>
          <div
            className={`
              mt-auto

              sm:mt-0 sm:text-right
            `}
          >
            <div>Humidity: 58%</div>
          </div>
          <div
            className={`
              mt-auto

              sm:mt-0 sm:text-right
            `}
          >
            <div>Clouds</div>
          </div>
        </div>
      </div>
    </div>
  );
}
