export const Skeleton = ({
  width,
  height,
  className,
}: {
  width?: string | number;
  height?: string | number;
  className?: string;
}) => {
  return (
    <div
      style={{ width: width, height: height }}
      className={`bg-blue-600 animate-pulse ${className}`}
    ></div>
  );
};
