import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[20rem] grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:gap-5 gap-2 max-w-6xl mx-auto w-11/12 md:w-10/12",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div className={cn("row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-transparent backdrop-blur-md dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 md:h-full h-80 cursor-pointer", className)}>
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200 ">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 h-12 overflow-hidden">
          {description}
        </div>
      </div>
    </div>
  );
};
