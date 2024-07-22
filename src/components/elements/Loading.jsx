import loadingIcon from "../../assets/img/loading.png";

const Loading = () => {
  return ( 
    <div className="absolute top-2 right-2 px-4 py-2 bg-teal-300 rounded-lg shadow-lg">
      <div className="flex gap-4">
        <img src={loadingIcon} alt="loading" width="30" className="animate-spin"/>
        {/* <small className="mx-auto"><a target="_blank" href="https://icons8.com/icon/59145/loading">Loading</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></small> */}
        <code className="text-lg font-medium text-slate-700">Fetching...</code>
      </div>
    </div>
   );
}
 
export default Loading;