import Image from "next/image";
import { absoluteUrl, formatDate } from "@/lib/utils";
import type { DrupalNode } from "next-drupal";

interface CampingProps {
  node: DrupalNode;
}

export function Camping({ node, ...props }: CampingProps) {
  return (
    <article {...props}>
      <h1 className="mb-4 text-4xl font-black leading-tight">{node.title}</h1>
    </article>
  );
}
