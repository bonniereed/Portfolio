import Image from 'next/image'
import Helm from './components/Helm'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
    <Helm/>
      </div>
    </main>
  )
}
