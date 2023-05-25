import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const {
    token,
    user
  } = await request.json()

  const emails = [
    'thiago_l_silveira@estudante.sesisenai.org.br',
    'danielle_albano@estudante.sesisenai.org.br',
    'joao-vitor_bento@estudante.sesisenai.org.br',
    'vinicius_axt@estudante.sesisenai.org.br'
  ]

  if (emails.includes(user.email)) {
    token && cookies().set('token', token);
    user && cookies().set('user', JSON.stringify(user))
  }

  console.log({
    token,
    user
  })

  return NextResponse.json({ success: true, name: 'name' })
}