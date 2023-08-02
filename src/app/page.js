import Link from "next/link";

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/react-uswds">View React USWDS page (broken)</Link>
      </li>
      <li>
        <Link href="/plain-uswds">View non-React USWDS page (works)</Link>
      </li>
    </ul>
  );
}
