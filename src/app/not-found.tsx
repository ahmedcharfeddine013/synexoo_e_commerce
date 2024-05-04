import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function notFound() {
  return (
    <div className='flex items-center justify-center h-screen flex-col gap-4'>
      Sorry Page not found 404
      <Button>
        <Link href={'/'}>Return to HomePage</Link>
      </Button>
    </div>
  )
}
