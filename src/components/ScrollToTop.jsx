import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scrolls the window back to the top whenever the route changes.
 * Uses useLayoutEffect so the reset is synchronous (before paint),
 * preventing any flash of the previous page's scroll position.
 * Place this inside <BrowserRouter> but outside <Routes>.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    // Synchronously reset scroll — no animation, no flash
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0          // Safari fallback
  }, [pathname])

  return null
}
