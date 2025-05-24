import { drupal } from "@/lib/drupal";
import type { Metadata } from "next";
import { type DrupalNode } from "next-drupal";
import { DrupalJsonApiParams } from "drupal-jsonapi-params";
import { CampingTeaser } from "@/components/drupal/CampingTeaser";

export const metadata: Metadata = {
  description: "A Next.js site powered by a Drupal backend.",
};

const page = async () => {
  const params = new DrupalJsonApiParams()
    .addFields("node--camping", ["title", "field_camping_image", "field_description"])
    .addFilter("status", "1")
    .addSort("created", "DESC");

  const nodes = await drupal.getResourceCollection<DrupalNode[]>("node--camping", {
    params: {
      include: "field_camping_image",
    },
  });
  console.log(nodes);
  return (
    <>
      <h1 className="mb-10 text-6xl font-black">All Campings.</h1>
      <div>
        {nodes && nodes.length > 0 ? (
          <ul className="grid grid-cols-3 gap-4">
            {nodes.map((node) => (
              <li key={node.id}>
                <CampingTeaser node={node} />
              </li>
            ))}
          </ul>
        ) : (
          <p>There seems to be a problem with loading the campings</p>
        )}
      </div>
    </>
  );
};
export default page;
