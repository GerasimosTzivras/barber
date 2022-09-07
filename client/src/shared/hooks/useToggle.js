import { useState } from 'react'

export function useToggle(defaultValue) {
  const [value, setValue] = useState(defaultValue)

  function toggle(value) {
    setValue((state) => (typeof value === 'boolean' ? value : !state))
  }

  return [value, toggle]
}
