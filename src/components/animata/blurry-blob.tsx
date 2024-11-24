import clsx from "clsx";

interface BlobProps extends React.HTMLAttributes<HTMLDivElement> {
  firstBlobColor: string;
  secondBlobColor: string;
}

export function cn(...inputs: any[]) {
  return clsx(inputs);
}

export default function BlurryBlob({
  className,
  firstBlobColor,
  secondBlobColor,
}: BlobProps) {
  return (
    <div className="min-h-80 min-w-80 items-center justify-center">
      <div className="relative w-full max-w-xl">
        <div
          className={cn(
            "absolute -right-24 -top-28 h-72 w-72 animate-pop-blob rounded-sm bg-blue-400 p-8 opacity-45 mix-blend-multiply blur-3xl filter",
            className,
            firstBlobColor,
          )}
        ></div>
        <div
          className={cn(
            "absolute -left-40 -top-64 h-72 w-72 animate-pop-blob rounded-sm bg-purple-400 p-8 opacity-45 mix-blend-multiply blur-3xl filter",
            className,
            secondBlobColor,
          )}
        ></div>
      </div>
    </div>
  );
}
