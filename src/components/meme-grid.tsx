import type { MemePost } from "@/components/meme-explorer"
import MemeCard from "@/components/meme-card"

interface MemeGridProps {
  memes: MemePost[]
  lastMemeRef: (node: HTMLDivElement | null) => void
}

export default function MemeGrid({ memes, lastMemeRef }: MemeGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-4">
      {memes.map((meme, index) => {
        if (index === memes.length - 1) {
          return (
            <div ref={lastMemeRef} key={meme.id}>
              <MemeCard meme={meme} />
            </div>
          )
        } else {
          return <MemeCard key={meme.id} meme={meme} />
        }
      })}
    </div>
  )
}

