import HeroInfo from '@/components/HeroInfo'
import ProjectInfo from '@/components/ProjectInfo'


export default function Home() {
  return (
    <main className='max-w-[1300px] mx-auto  sm:flex-row flex flex-col flex-auto my-3 ' >
    <HeroInfo/>
    <ProjectInfo/>
    </main>
  )
}
