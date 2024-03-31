import ViewContentRecentLike from "./View Content Recent Like";
import '../Top Trending/Top Trending.css'
function ViewRecentLikes() {
  return (
    <div className="container recent__like--container mt-6 m-auto">
      <div className="text-white sm:flex-2 sm:flex sm:justify-start sm:self-end text-3xl sm:order-1 flex-1 mt-2 order-1">
        <div className="rencent__Like--title font-bold">
          Recent Like <span className="text-red-600">&#35;</span>
        </div>
      </div>
      <ViewContentRecentLike />
    </div>
  );
}

export default ViewRecentLikes;
