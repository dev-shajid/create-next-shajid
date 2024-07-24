import Link from "next/link"

export function Logo() {
  return (
    <Link
      className='flex items-center gap-2 font-bold bg-accent-foreground text-muted size-12 rounded-full justify-center'
      href={'/'}
    >
      <span className="text-xl font-extrabold">NXT</span>
    </Link>
  )
}
