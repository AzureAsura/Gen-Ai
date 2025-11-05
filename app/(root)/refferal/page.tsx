import { ProtectedRoute } from '@/components/ProtectedRoute'

export default function RefferalPage() {
  return (
    <ProtectedRoute>
      <div className='text-2xl text-white'>referral</div>
    </ProtectedRoute>
  )
}