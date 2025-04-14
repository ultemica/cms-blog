import { format } from 'date-fns'

async function getIP() {
  try {
    const res = await fetch('https://api.ipify.org?format=json')
    const data = await res.json()
    return data.ip
  } catch {
    return '127.0.0.1'
  }
}

export default async function Page() {
  const ip = await getIP()
  const now = new Date()
  const loginTime = format(now, 'EEE MMM d HH:mm:ss yyyy')
  const lines = [
    'Welcome to Ubuntu 22.04.5 LTS (GNU/Linux 6.8.0-52-generic x86_64)',
    '',
    ' * Documentation:  https://help.ubuntu.com',
    ' * Management:     https://landscape.canonical.com',
    ' * Support:        https://ubuntu.com/advantage',
    '',
    `Last login: ${loginTime} from ${ip}`,
    'root@ubuntu: ~#'
  ]

  return (
    <main className='font-mono bg-gray-900 text-gray-200 p-4'>
      {lines.map((line, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <p key={i} style={{ margin: 0 }}>
          {line}
        </p>
      ))}
    </main>
  )
}
