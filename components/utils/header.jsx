import { ConnectWallet } from '@3rdweb/react'
import  Link from 'next/link'
import { useContext } from 'react'
import { MainContext } from '../../helpers/global/context'

export  default function        Header(){
    const   {dispatch,state}=useContext(MainContext)
    // console.log(state)
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

{/* <button className="
bg-blue-400
 text-white
 rounded-md
 border-none
 shadow-md
 shadow-slate-500
 active:scale-90
 transition-all
 hover:bg-blue-500
 p-2"
 onClick={()=>dispatch({wallet:true})}
 
 >Connect wallet</button> */}
 <div  
   className=' rounded-full'>
 <ConnectWallet  className='text-black'     /> </div>
        </div>
    )
}