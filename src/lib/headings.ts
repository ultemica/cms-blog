export type Heading = {
  id: string
  text: string
  level: number
  children?: Heading[]
}

function nestHeadings(flatHeadings: Omit<Heading, 'children'>[]): Heading[] {
  const result: Heading[] = []
  const stack: Heading[] = []

  for (const h of flatHeadings) {
    const heading: Heading = { ...h, children: [] }
    while (stack.length > 0 && stack[stack.length - 1].level >= heading.level) {
      stack.pop()
    }
    if (stack.length === 0) {
      result.push(heading)
      stack.push(heading)
    } else {
      stack[stack.length - 1].children?.push(heading)
      stack.push(heading)
    }
  }
  return result
}

function extractHeadings(markdown: string): Omit<Heading, 'children'>[] {
  const lines = markdown.split('\n')
  const headings: Omit<Heading, 'children'>[] = []
  for (const line of lines) {
    const match = /^(#{1,6})\s+(.+)$/.exec(line)
    if (match) {
      const level = match[1].length
      const text = match[2].trim()
      // id生成: Zenn風に小文字化・空白を-に・記号除去
      const id = encodeURIComponent(
        text
          .toLowerCase()
          .replace(/[^\w\s\-ぁ-んァ-ヶ一-龠々ー]/g, '')
          .replace(/\s+/g, '-')
      )
      headings.push({ id, text, level })
    }
  }
  return headings
}

export function getHeadings(markdown: string): Heading[] {
  return nestHeadings(extractHeadings(markdown))
}
