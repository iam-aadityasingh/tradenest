import { Suspense } from 'react'

export default function footer() {
  return (
    <div>
        <Suspense fallback={<div>Loading Footer...</div>}>
            <footer className="bg-[#4B164C] text-white py-4">
                <div className="container mx-auto text-center">
                    <p>&copy; {new Date().getFullYear()} TradeNest. All rights reserved.</p>
                    <p>Follow us on <a href="https://twitter.com/tradenest" className="text-blue-400">Twitter</a></p>
                </div>
            </footer>
        </Suspense>
    </div>
  )
}

