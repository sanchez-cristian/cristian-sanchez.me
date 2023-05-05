import BlogGrid from '@/components/homepage/BlogGrid'
import style from './page.module.css'
import { Projects } from '@/components/homepage/Projects'
import Twitch from '@/components/homepage/Twitch'
import CommandK from '@/components/homepage/CommandK'
import GridLine from '@/components/global/GridLine'

export default function Home() {
  return (
    <main className={style.mainContainer}>
      <CommandK/>
      <section className={style.firstSection}>
        <div className={style.titleContainer}>
          <GridLine lineType="vertical" offset='offset' className={style.lineLeft}/>
          <GridLine lineType="vertical" offset='offset'className={style.lineTop}/>
          <GridLine lineType="horizontal" className={style.lineTop}/>
          <GridLine lineType="horizontal" className={style.lineBottom}/>
          <h1 className={style.title}>Cristian Sánchez</h1>
          <div className={style.subtitleInlineContainer}>
            <button className={style.subtitle}>Software developer</button>
            <button className={style.subtitle}>⌘k</button>
          </div>
        </div> 
      </section> 
      <BlogGrid/>
      <Projects/>
      <Twitch/>
    </main>
  )
}
