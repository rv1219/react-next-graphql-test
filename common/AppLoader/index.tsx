import * as React from 'react'

const AppLoader = () => (
  <div>
    <button type="button" className="bg-indigo-500 ..." disabled>
      <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
      Processing...
    </button>
  </div>
)

export default AppLoader
