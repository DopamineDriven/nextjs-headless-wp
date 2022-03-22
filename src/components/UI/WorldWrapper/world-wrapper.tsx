import World from "@/components/UI/World";
import { UnwrapDivProps } from "@/types/mapped";
import cn from "classnames";
const WorldWrapper = ({
  ...props
}: UnwrapDivProps<"className" | "onChange">) => {
  return (
    <>
      <World />
      <div
        {...props}
        className={cn(
          " relative lg:block font-extralight lg:max-w-8xl lg:mx-auto mx-auto font-interVar transform-gpu mt-6 mb-12"
        )}>
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8 md:grid md:grid-cols-5'>
          <div className='max-w-3xl z-10 mx-auto md:col-span-5'>
            <h2 className='text-center uppercase lg:tracking-[7px] text-[32px] leading-[20px] text-gray-700 sm:text-3xl'>
              {"Traffic from around the World"}
            </h2>
          </div>
          {/* <div className='max-w-xs text-sm max-h-[8rem] absolute origin-top-right right-[25%] top-[12%] lg:right-[15%]  lg:top-[10%] mx-auto'>
          <ul className='lg:grid lg:grid-rows-2 mx-auto'>
            <div className='inline-flex mr-4'>
              <div className='min-w-[12px] inline-block max-h-[12px] align-middle my-0 mt-[5px] bg-gradient-to-r from-[#0c71b3] to-[#03c9e6] border-black border-[1px]' />
              &nbsp;&nbsp;
              <div className='inline-block font-gothamLight font-normal uppercase tracking-[2px] '>
                coverage
              </div>
            </div>
            <div className='inline-flex'>
              <div className='inline-block min-w-[12px] max-h-[12px] align-middle my-0 mt-[5px] bg-[#D3D3D3] border-black border-[1px]' />
              &nbsp;&nbsp;
              <div className='inline-block font-gothamLight font-normal uppercase text-black tracking-[2px]'>
                coming soon
              </div>
            </div>
          </ul>
        </div> */}
        </div>
      </div>
    </>
  );
};

export default WorldWrapper;
