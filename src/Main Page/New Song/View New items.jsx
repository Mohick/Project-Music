import ViewsContentNewSong from './Views Content New Song';

function ViewRNewSong() {
  return (
    <div className="container recent__like--container mt-6 m-auto">
      <div className="text-white sm:flex-2 sm:flex sm:justify-start sm:self-end text-3xl sm:order-1 flex-1 mt-2 order-1">
        <div className="new__song--title font-bold">
          New Songs <span className="text-red-600">&#35;</span>
        </div>
      </div>
      <ViewsContentNewSong />
    </div>
  );
}

export default ViewRNewSong;
