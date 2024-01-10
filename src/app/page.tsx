import TypeWriterTitle from '@/components/ui/TypeWriterTitle'
import { Button } from '@/components/ui/button'
import { generateImagePrompt } from '@/lib/openai'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  // const wai = async () => {
  //   const image_description = await generateImagePrompt("robot");
  //   console.log(image_description);
  // }
  // wai();
  return (
    <div className='bg-gradient-to-r min-h-screen from-rose-100 to-teal-100'>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className='font-semibold text-center text-7xl'>
            AI Assited <span className='font-bold text-green-600'>Docs</span> App
        </h1>
        <div className="mt-4">
          <h2 className='font-semibold text-3xl text-center text-slate-700'>
            <TypeWriterTitle />
          </h2>
          <div className="mt-8"></div>
          <div className='flex justify-center'>
          <Link href='/dashboard'> 
            <Button className='bg-green-600'>
                Get Started <ArrowRight className='ml-5 h-5 w-5 ' strokeWidth={3} />
            </Button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
