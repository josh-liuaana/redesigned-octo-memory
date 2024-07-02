function page({ params }: { params: { id: string } }) {
  const id = params.id
  console.log(id)
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-4">
      <p>Single book page - {id}</p>
    </main>
  )
}

export default page
