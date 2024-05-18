import { FullScreenBg } from "@/components/layouts/FullScreenBg";
import { DisplayWeather } from "@/features/DisplayWeather";
import { SearchHistory } from "@/features/SearchHistory";
import { SearchWeather } from "@/features/SearchWeather/SearchWeather";
import { AppProvider } from "@/providers/AppProvider";

function App() {
  return (
    <AppProvider>
      <FullScreenBg className="overflow-auto">
        <main className="container py-5">
          <header
            className={`
              flex items-center gap-2 pb-[8.69rem]

              sm:gap-4 sm:pb-28
            `}
          >
            <SearchWeather />
          </header>

          <section
            className={`
              flex flex-col items-center justify-center rounded-lg
              bg-[#1A1A1A]/[.3] p-5 backdrop-blur-sm

              hover:shadow-2xl

              sm:p-11
            `}
          >
            <DisplayWeather
              className={`
                pb-4

                sm:pb-[1.62rem]
              `}
            />
            <SearchHistory />
          </section>
        </main>
      </FullScreenBg>
    </AppProvider>
  );
}

export default App;
