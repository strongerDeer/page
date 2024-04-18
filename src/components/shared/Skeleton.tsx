export const Skeleton = ({
  width,
  height,
}: {
  width: string | number;
  height: string | number;
}) => {
  return (
    <div
      style={{ width: width, height: height }}
      className="bg-blue-600 animate-pulse"
    ></div>
  );
};
