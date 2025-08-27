import nProgress from 'nprogress'
import 'nprogress/nprogress.css'

nProgress.configure({
  easing: 'easing',
  showSpinner: false,
  parent: 'body',
})

export const start = () => {
  nProgress.start()
}

export const stop = () => {
  nProgress.done()
}
