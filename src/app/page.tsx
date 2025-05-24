import type { Metadata } from "next";

export const metadata: Metadata = {
  description: "A Next.js site powered by a Drupal backend.",
};

// const drupal = new DrupalClient({
//   baseUrl: process.env.NEXT_PUBLIC_DRUPAL_BASE_URL,
// } as any);

export default async function Home() {
  return (
    <>
      <p>this is the Home Page</p>
    </>
  );
}
