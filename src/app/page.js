import Link from "next/link";

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/react-uswds">
          View server-component with React USWDS import (broken)
        </Link>
      </li>
      <li>
        <Link href="/react-uswds-use-client">
          View page with "use client" directive and React USWDS import (works)
        </Link>
      </li>
      <li>
        <Link href="/plain-uswds">View non-React USWDS page (works)</Link>
      </li>
    </ul>
  );
}
