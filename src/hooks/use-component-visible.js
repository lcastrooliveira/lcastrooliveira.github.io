import { useState, useEffect, useRef } from 'react'

export default function useComponentVisible(initialIsVisible, targetException) {
  const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible)
  const ref = useRef(null)

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false)
    }
    if (
      targetException.current &&
      targetException.current.contains(event.target)
    ) {
      setIsComponentVisible(true)
    }
  }

  const handleHideDropdown = event => {
    if (event.key === 'Escape') {
      setIsComponentVisible(false)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleHideDropdown, true)
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('keydown', handleHideDropdown, true)
      document.removeEventListener('click', handleClickOutside, true)
    }
  })

  return { ref, isComponentVisible, setIsComponentVisible }
}
