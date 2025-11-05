import { ProtectedRoute } from "@/components/ProtectedRoute"

const page = () => {
  return (
    <ProtectedRoute>
      <div className='text-2xl text-white'>PROFILE</div>
    </ProtectedRoute>
  )
}

export default page