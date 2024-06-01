## [Live demo](https://weather-app-swart-pi-79.vercel.app/)

## How to start

- npm install -g pnpm
- pnpm install
- pnpm start

## Storybook

pnpm run storybook

## Project Structure

![dependency-graph.svg](dependency-graph.svg)

## Reasons for deps:

- zustand - light weight, scalable, flexible, easy for redux devs to pick up verus other state management Jotai
- tailwind - easy to switch out (remove tailwind and just take the compiled css), great for fast prototyping because easier to customize and set one-off changes via className verus styled-components where you have to define the props

## Assumptions:

1. The temperature should be in Celsius and should not have decimal points; rounding off is expected.
2. Longitude and latitude are displayed as whole numbers without decimal points.
3. There will only be one page in the near future since it does not seem like this will be a multi-page app (therefore, no react-router-dom).
4. There is a chance of additional feature requirements being added to the project, project structure and library choices are choosen with that in mind.
5. The date displayed is in local time, not the time of the displayed country.
6. The API will only be called after the user has entered at least two characters.
7. The requirement states to use the Open Weather API for weather; however, there is no specific requirement for geo-location data, so another API, Mapbox API, is used.
8. The requirement says to search for both countries and cities. The app allows searching for both. However, since there is no requirement to restrict searches, users can also search for streets, postal codes, places, etc.
9. There is no requirement stating that the search button to the right of the search input must be clickable and no specific requirement for search behaviour. Autocomplete component is chosen because in my humble opinion , it provides a better user experience.
10. Assume that search history should allow duplicates items to appear instead of agreegating them

## Regrets due to time limitation

1. SEO improvements
2. Performance optimization
3. Robust unit testing and integration testing (this is due to a config bug that i have not been able to solve in 48h)
4. More refactoring and clean up
5. Properly setup design system

## UI bugs and limitations/improvements to be added

1. history component can go to inifinity , so need list virtulization react-window, interesting idea to explore: LRU cache
2. search is missing a clear button
3. weather display layout on desktop does not match design (bottom row should go down instead of side by side)

## Other things to take note

1. if SEO is important, should do ssr/nextjs, did not do it here because it takes a bit of a bit of time to setup and probably too risky for this particular assignment.
2. if speed and bundle size is important, probably switch to preact/solidjs, but need to consider learning curve/team onboarding/other risks like community support
