import { useWeb3 } from "@3rdweb/hooks";


export  const       WalletData=()=>{
    const       {address,chainId,provider}=useWeb3()


    return(
        <div    className="bg-red-800 w-[200px] h-[200px]">
            {address}
            {chainId}
        </div>
    )
}