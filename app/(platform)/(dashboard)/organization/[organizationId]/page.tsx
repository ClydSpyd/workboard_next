import { auth } from "@clerk/nextjs"

export default function OrganizationIdPage(){
  const { orgId } = auth()
  return(
    <div>
      <h1>örg:</h1>
      <h1>{orgId}</h1>
    </div>
  )
}