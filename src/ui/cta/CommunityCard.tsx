import Image from "next/image";
import Link from "next/link";

interface CommunityCardProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  communityId: string;
}

export function CommunityCard({ imageUrl, imageAlt, title, description, communityId }: CommunityCardProps) {
  return (
    <Link href={`/communities/${communityId}`} className="flex flex-row gap-2 bg-white rounded-2xl shadow-xl">
      <Image
        src={imageUrl}
        alt={imageAlt}
        width={100}
        height={100}
        className="w-full object-cover rounded-l-2xl aspect-[92/61]"
      />
      <div className="flex flex-col gap-2 px-4 py-2 text-left justify-center w-4/5">
        <h3 className="text-sm font-bold text-gray-900">
          {title}
        </h3>
        <span className="text-sm text-gray-900 line-clamp-3">
          {description}
        </span>
      </div>
    </Link>
  );
}