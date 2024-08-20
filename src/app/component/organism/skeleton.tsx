import SkeletonBlock from "../atom/skeletonBlock";
const SkeletonLoader = () => (
  <div className="grid grid-cols-3 gap-5">
    {[...Array(24)].map((_, index) => (
      <SkeletonBlock key={index} />
    ))}
  </div>
);

export default SkeletonLoader;
