import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/utils/banner'
import Header from '../components/utils/header'
import styles from '../styles/Home.module.css'

export default function Home() {

  return(<div>
    <Head>
      <title>Blocker-A marketplace for create sell mint nfts</title>
    </Head>
<Header/>
<Banner/> 
  </div>
  )
}
