/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_MAPBOX_API_KEY: string;
  readonly VITE_MAPBOX_API_BASE_URL: string;
  readonly VITE_OPEN_WEATHER_API_KEY: string;
  readonly VITE_OPEN_WEATHER_API_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
