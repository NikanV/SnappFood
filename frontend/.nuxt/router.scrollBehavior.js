export default function (to, from, savedPosition) {
  if (!process.server) {
    document?.getElementById('nobitex-panel')?.scrollTo(0, 0)
  }
  return { x: 0, y: 0 }
}
