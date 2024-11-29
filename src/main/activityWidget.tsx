import AvatarList from "../components/animata/avatarList";
import { Chart } from "../components/animata/bentoGrid";
import { NumberTicker } from "../components/magicui/numberAnim";

const Activity = () => {
  return(
      <div className="row-span-2 col-span-2">
        <h1 className="text-white ml-2 mb-1 flex items-center gap-1"><img src="/utils/activity.svg" className="size-4"/>Activity</h1>
        <div className=" h-[80vh] bg-neutral-800 border-violet-800 shadow-violet-800 flex flex-col-reverse shadow-md border-2 rounded-lg">
          <Chart/>
          <div className="bg-zinc-100 h-1/2 rounded-t-lg p-12 flex flex-col items-center">
            <h1 className="font-geo font-black text-4xl text-center">Welcome Back Vincent, You Have Done <NumberTicker delay={0.5} value={21} className="bg-zinc-200 font-mono text-3xl"/> Course This week</h1>
            <AvatarList size="md" className="py-0 px-1 mt-12" />
          </div>
        </div>
      </div>
  )
}

export default Activity;