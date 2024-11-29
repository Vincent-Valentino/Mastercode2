const History = () => {
  return(
    <div>
      <h1 className="text-white ml-2 mb-1 flex items-center gap-1 "><img src="/utils/history2.svg" className="size-4"/>History</h1>
      <button className="row-span-2 font-mono h-[40vh] w-full bg-zinc-100 gap-1 justify-center rounded-lg transition-all duration-500 hover:scale-[.98] flex flex-col items-center border-orange-800 shadow-orange-800 shadow-md border-2">
        <img src="/utils/history.svg" className="px-4 size-28" />
        <div className="flex flex-col">
          <h1>Your History:</h1>
          <a className="text-green-800 text-sm hover:underline font-semibold" href="#">React: Redux</a>
          <a className="text-green-800 text-sm hover:underline font-semibold" href="#">React: TanStack Query</a>
          <a className="text-green-800 text-sm hover:underline font-semibold" href="#">Go: Native Backend and Gin</a>
          <p className="mt-4 text-[0.7em]">Click the Button to see more..</p>
        </div>
      </button>
    </div>
  )
}

export default History;