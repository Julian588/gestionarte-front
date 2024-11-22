export function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width="200"
      height="200"
    >
      <path
        d="M45 21.5c-4.4 0-8.4 1.5-11.5 4.1-2.4-1.2-5.3-1.9-8.5-1.9-9.6 0-17.5 7.9-17.5 17.5S15.4 58 25 58c5 0 9.5-2.2 12.7-5.8 0.8 0.1 1.5 0.2 2.3 0.2 8.6 0 15.5-7 15.5-15.5S53.6 21.5 45 21.5zM35.5 50.5C32.8 53 29.1 54.5 25 54.5 17.6 54.5 12 49 12 41.5S17.6 28.5 25 28.5c4.1 0 8 1.7 10.5 4.5-5.7 2.9-9.5 8.8-9.5 15.5 0 2.8 0.8 5.4 2.2 7.5-1 0.3-2 0.5-3.2 0.5-2.5 0-4.7-0.8-6.7-2.2 1.5 2.2 4 3.5 6.7 3.5 1.4 0 2.8-0.3 4.2-0.8-1.6-2-2.5-4.6-2.5-7.5 0-6.6 5.4-12 12-12s12 5.4 12 12c0 2.9-1 5.5-2.5 7.5z"
        fill="#00008b"
      />

      <circle
        cx="45"
        cy="17"
        r="7"
        fill="none"
        stroke="#00008b"
        stroke-width="2"
      />
      <text x="41" y="20" fill="#00008b" font-family="Arial" font-size="10">
        $
      </text>
    </svg>
  );
}

export function HomeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
      width="40px"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    </svg>
  );
}

export function LoginIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
      width="40px"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
      />
    </svg>
  );
}

export function LogoutIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
      width="40px"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
      />
    </svg>
  );
}

export function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
      width="40px"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
      />
    </svg>
  );
}

export function DashboardIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
      width="40px"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  );
}
