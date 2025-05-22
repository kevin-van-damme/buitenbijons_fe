import { ArticleTeaser } from "@/components/drupal/ArticleTeaser";
import { drupal } from "@/lib/drupal";
import { Agent } from "http";
import type { Metadata } from "next";
import { DrupalClient, type DrupalNode } from "next-drupal";
import { DrupalJsonApiParams } from "drupal-jsonapi-params";
import { CampingTeaser } from "@/components/drupal/CampingTeaser";

export const metadata: Metadata = {
  description: "A Next.js site powered by a Drupal backend.",
};

// const drupal = new DrupalClient({
//   baseUrl: process.env.NEXT_PUBLIC_DRUPAL_BASE_URL,
// } as any);

export default async function Home() {
  const params = new DrupalJsonApiParams()
    .addFields("node--kamping", ["title", "field_camping_image", "field_description"])
    .addFilter("status", "1")
    .addSort("created", "DESC");

  const nodes = await drupal.getResourceCollection<DrupalNode[]>("node--kamping", {
    params: {
      include: "field_camping_image",
    },
  });
  console.log(nodes);
  return (
    <>
      <h1 className="mb-10 text-6xl font-black">All Campings.</h1>
      <div>
        <ul>
          {nodes &&
            nodes.map((node) => (
              <li key={node.id}>
                <CampingTeaser node={node} />
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
