function FancySection() {
  return (
    <section
      style={{
        padding: '1rem',
        backgroundColor: '#000',
        margin: '1rem 0',
        border: '1px solid #33ff33'
      }}
    >
      <h2 style={{ color: '#33ff33' }}>terminal@host:~</h2>
      <p style={{ color: '#33ff33' }}>Welcome to the fancy terminal section.</p>
    </section>
  )
}

export default async function Page() {
  return (
    <main
      style={{
        backgroundColor: '#000',
        color: '#33ff33',
        fontFamily: 'monospace',
        padding: '2rem'
      }}
    >
      <h1>Welcome, Engineer!</h1>
      <p>Here’s your cool dev environment.</p>
      <FancySection />
    </main>
  )
}
