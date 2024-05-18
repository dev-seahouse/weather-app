export function DeleteIconRound({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="17"
        cy="17"
        r="16"
        stroke="white"
        strokeOpacity="0.4"
        strokeWidth="2"
      />
      <g opacity="0.5">
        <mask
          id="mask0"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="9"
          y="9"
          width="16"
          height="16"
        >
          <rect x="9" y="9" width="16" height="16" fill="url(#pattern0)" />
        </mask>
        <g mask="url(#mask0)">
          <rect x="5" y="5" width="23" height="23" fill="white" />
        </g>
      </g>
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0" transform="scale(0.0104167)" />
        </pattern>
        <image
          id="image0"
          width="96"
          height="96"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAACyUlEQVR4nO2cO4xNURiFVyQokUgQEQlKovOoiETh0QjReVVEh84rCkKFktGhEaJDVESH0qMRdCY6j0IGM0v+5LRTjLv3Pus/s77k6+d8+94zM3fWHMAYY4wxxhhjtLgAgCN6pe+LmM3x6UPoPz59CP3H55AOoVYcDkQfAHwAvb8K6XdA/yHoW1D/MdiD/h4AH0Dvr0L6HdB/CA71FmSMMcYYY4wxwRmBX4DY2NNKR39QIAgbewBCbBUIwsZugRCrBYKwsasgxDwAkwJR2MjJ7pqlGBcIw0Z+gSCvBMKwkS8hyAOBMGzkfQhyTSAMG3kVgpwUCMNGnoAg+wTCsJF7IchGgTBs5AYIskwgDBu5FILMATAhEIeVneiuVZJPAoFY2Y8Q5rlAIFb2GYS5IxCIlb0NYS4JBGJlL0KYYwKBWNmjEGaXQCBWdieEWScQiJVdC2EWCgRiZRdAnO8CkVjJH0jAO4FQrOQbJOCJQChW8jESMCYQipW8gQScEwjFSsYCUJ5DAqFYyVgAyrNNIBQrGQtAedYIhGIlYwEoz3wAUwKxWNip7tpS8FUgGAsby780vBYIxsLG8i8NDwWCsbCx/EvDdYFgLGws/9JwSiAYCxvLvzTsFwjGwsbyLw2bBIKxsLH8S8NygWAsbCz/0hDLsd8C0Tgb1nDT8VkgHAsZi790vBAIx0LG4i8ddwXCsZCx+EvHZYFwLGQs/tJxXCAcCxmLv3TsFgjHQsbiLx3rBcKxkLH4S8cigXAsZCz+UvJTIB5nwxpuOt4LBOSIvkVingoE5IjG0i8ttwQCckRvIjHnBQJyRM8iMUN4fMEeJGYJgD8CETnCx9CLkZx7AiH5n8YHiulZ2f0szWR+A7ACA2E7gF8CUTmDW88ODIzN3XMWKO6HbH+AnwnxqMcj3b/6jIs86vJv97U8AnAYwNy+IxljjDHGGGMwaP4BXfoeJZvYrY0AAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  );
}
