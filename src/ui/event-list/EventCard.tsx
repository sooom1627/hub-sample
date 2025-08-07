import Image from "next/image";

interface EventCardProps {
  imageUrl: string;
  imageAlt: string;
  category: string;
  title: string;
}

export function EventCard({ imageUrl, imageAlt, category, title }: EventCardProps) {
  return (
    <div className="bg-white rounded-2xl">
      <Image 
        src={imageUrl}
        alt={imageAlt}
        width={100} 
        height={100} 
        className="w-full object-cover rounded-t-lg aspect-[92/61]"
      />
      <div className="flex flex-col gap-2 px-4 py-2">
        <span className="text-gray-700 bg-gray-100 px-3 w-fit py-1.5 rounded-lg text-sm font-medium">
          {category}
        </span>
        <h3 className="text-base text-gray-900 line-clamp-2">
          {title}
        </h3>
      </div>
    </div>
  );
}