import { mount, useEffect } from 'my-ui-library'

const appContainer = document.getElementById('app')

useEffect(() => {
  console.log('Component mounted')
})

mount(appContainer)
