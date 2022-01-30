import  Link from 'next/link'

export  default function        Header(){
    return  (
        <div    className="flex
        justify-around
        p-4
   
        border-b-[1px]
        items-center
        sticky
        top-0
        ">

<h1 className="
text-lg
font-[40px]
text-blue-500
" ><Link   href="/">Blocker</Link></h1>

<button className="
bg-blue-400
 text-white
 rounded-md
 border-none
 shadow-md
 shadow-slate-500
 active:scale-90
 transition-all
 hover:bg-blue-500
 p-2">Connect wallet</button>
        </div>
    )
}