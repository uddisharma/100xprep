import { cn } from "@/lib/utils";

type WelcomeBannerTypes = {
  title: React.ReactNode;
  description?: string;
  media?: React.ReactElement;
  contentClassName?: string;
  className?: string;
};

export default function WelcomeBanner({
  title,
  description,
  media,
  children,
  contentClassName,
  className,
}: React.PropsWithChildren<WelcomeBannerTypes>) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-between rounded-lg bg-gray-100/60 p-5 dark:bg-gray-100 sm:p-6 lg:p-7",
        className,
      )}
    >
      <div className={cn(contentClassName)}>
        <h2 className="mb-2 text-2xl sm:mb-3 md:text-3xl">{title}</h2>
        {description && (
          <p className="mb-5 text-sm leading-[1.6] text-gray-700 sm:mb-6 sm:text-base md:mb-8 lg:mb-10">
            {description}
          </p>
        )}
        {children}
      </div>
      {media && <div>{media}</div>}
    </div>
  );
}
