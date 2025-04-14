import * as cheerio from 'cheerio'
import { format } from 'date-fns'
import { toZonedTime } from 'date-fns-tz'
import hljs from 'highlight.js'
import 'highlight.js/styles/hybrid.css'

export const formatDate = (date: string) => {
  const utcDate = new Date(date)
  const jstDate = toZonedTime(utcDate, 'UTC')
  return format(jstDate, 'd MMMM, yyyy')
}

export const formatRichText = (richText: string) => {
  const $ = cheerio.load(richText)
  const highlight = (text: string, lang?: string) => {
    if (!lang) return hljs.highlightAuto(text)
    try {
      return hljs.highlight(text, { language: lang?.replace(/^language-/, '') || '' })
      // biome-ignore lint/correctness/noUnusedVariables: <explanation>
    } catch (e) {
      return hljs.highlightAuto(text)
    }
  }
  $('pre code').each((_, elm) => {
    const lang = $(elm).attr('class')
    const res = highlight($(elm).text(), lang)
    $(elm).html(res.value)
  })
  return $.html()
}
