import Link from "next/link";
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
export  default function    Banner(){
    return (
        <div    className="h-[90vh]  grid place-items-center font-bold ">
<div    className="flex justify-center gap-10">


<div    className="flex flex-col gap-10">


<h1 className="text-2xl text-gray-700 gap-4 flex flex-col">
            <div    className="
            text-blue-500
            ">Everything</div>
            Sell Collect Mint amazing NFTs
            </h1>
            <div    className="text-gray-700">
                Opensource project build to create ntfs on thirdweb 
            </div>
            <div    className="bg-blue-500
            w-[200px]
            p-2
            px-6
            object-contain
            grid
            place-items-center
            text-white
            border-transparent
            hover:bg-white
            hover:text-blue-500
            border-2
            hover:border-blue-400
            shadow-md
            active:scale-95
            ease-in
            duration-300
            rounded-xl">
            <Link   href="#">Get started</Link>

            </div>
</div>

<div    className="w-[400px]
background-banner
hover:shadow-xl
bg-center
bg-origin-content   
bg-cover
object-contain
ease-in-out
duration-300
h-[300px]
shadow-md
shadow-slate-300
rounded-2xl
grid
place-items-center">
<section
className="shadow-md
bg-white
rounded-full
p-4
grid
place-items-center
text-gray-500
active:scale-90
hover:text-blue-500
ease-in
duration-300
border-2
border-transparent
cursor-pointer
hover:border-blue-400
">
<PlayArrowOutlinedIcon/>

</section>

</div>

</div>
        </div>
    )
}