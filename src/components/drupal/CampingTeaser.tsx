import Image from "next/image";
import { Link } from "@/components/navigation/Link";
import { absoluteUrl, formatDate } from "@/lib/utils";
import type { DrupalNode } from "next-drupal";

interface CampingProps {
  node: DrupalNode;
}

export function CampingTeaser({ node, ...props }: CampingProps) {
  console.log(node.field_camping_image.image_style_uri);
  return (
    <div {...props}>
      <h1 className="mb-4 text-4xl font-black">{node.title}</h1>
      <div>
        <img src={node.field_camping_image.image_style_uri.medium} alt={node.title} />
      </div>
    </div>
  );
}
