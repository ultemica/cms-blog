import { Client } from '@/src/models/schema'
import { Space_Grotesk } from 'next/font/google'

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700']
})

export default async function Page() {
  const res = await Client.get('/about')
  console.log(res)
  return (
    <>
      <div className={grotesk.className}>
        <div className='text-gray-900 dark:text-gray-300 py-8 prose font-grotesk'>
          <p>
            I'm an independent developer with a strong passion for reverse engineering and data visualization,
            particularly focused on Nintendo Switch titles such as Splatoon 2 and Splatoon 3. I specialize in analyzing
            network traffic and uncovering undocumented APIs to build powerful tools for the community.
          </p>
          <p>
            As the creator of the Salmonia series, I strive to offer detailed performance tracking and statistical
            insights for the Salmon Run mode, helping players better understand their gameplay. My work spans across
            mobile and web platforms, and all of my major projects are open-sourced on GitHub. I'm always exploring new
            technologies, refining my code, and collaborating with enthusiasts who share a love for creative
            problem-solving in game analytics.
          </p>
          <p>
            And of course, none of my repositories contain any Nintendo intellectual property — just in case anyone was
            wondering.
          </p>
        </div>
      </div>
    </>
  )
}
