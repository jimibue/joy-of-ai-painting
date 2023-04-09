import { Fragment } from 'react'
import Image from 'next/future/image'
import clsx from 'clsx'
import Highlight, { defaultProps } from 'prism-react-renderer'

import { Button } from '@/components/Button'
import { HeroBackground } from '@/components/HeroBackground'
import blurCyanImage from '@/images/blur-cyan.png'
import blurIndigoImage from '@/images/blur-indigo.png'

const codeLanguage = 'javascript'
const code = `import React from 'react'

function HelloReact(name){
  return (
    <div>
       <h1>Hello React I am, {name}</h1>
    </div>
  )
}
`

const tabs = [
  { name: 'HelloReact.js', isActive: true },
]

function TrafficLightsIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 42 10" fill="none" {...props}>
      <circle cx="5" cy="5" r="4.5" />
      <circle cx="21" cy="5" r="4.5" />
      <circle cx="37" cy="5" r="4.5" />
    </svg>
  )
}

export function Hero() {
  return (
    <div className="overflow-hidden bg-slate-900 dark:-mb-32 dark:mt-[-4.5rem] dark:pb-32 dark:pt-[4.5rem] dark:lg:mt-[-4.75rem] dark:lg:pt-[4.75rem]">

      <div className="py-16 sm:px-2 lg:relative lg:py-20 lg:px-0 br"
    >
                    <p className="inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-7xl tracking-tight text-transparent">
                The Joy of AI Painting.
              </p>
        <div className="">

          <div className="relative z-10 md:text-center lg:text-left">
       
           <div className="relative">
        
              <p className="mt-3 text-2xl tracking-tight text-slate-400 bg-clip-text font-display text-transparent  ">
              Hello, friend! Join me, AI Bob Ross, as we create some happy little AI-generated paintings.
              </p>
              <div className="mt-8 flex gap-4 md:justify-center lg:justify-start">
                <Button href="https://reactjs.org/">Midjourney</Button>
                <Button href="https://github.com/facebook/react" variant="secondary">
                  Discord
                </Button>
              </div>
            </div>
          
          
          
          </div>
        </div>
      </div>
    </div>
  )
}
