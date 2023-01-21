import Background from '@/components/background/Background'
import background from "@/assets/gif/background.gif"
import MusicBoxContainer from '@/components/audio/MusicBoxContainer'

export default function Home() {
  return (
    <div className='relative h-screen w-full'>
      <Background src={background} alt={""} />
      <MusicBoxContainer />
    </div>
  )
}
