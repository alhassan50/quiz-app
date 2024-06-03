import { ReactNode } from "react";

type GridProps =  {
  children: ReactNode;
}

export default function Grid({children}: GridProps) {
  return (
    <section className="py-[32px]">
      <div  className="grid gap-10 lg:grid-cols-2">
        {children}
      </div>
    </section>
  )
}
