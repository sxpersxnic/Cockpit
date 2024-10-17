import Link from 'next/link';
import { ForwardRefExoticComponent, SVGProps, RefAttributes } from 'react';

export function IconCard({ name, href, icon }: { 
  name: string, 
  href: string, 
  icon: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & { title?: string; titleId?: string; } & RefAttributes<SVGSVGElement>>
}) {
  return (
    <div className="">
      <Link href={href} className="">
        <div className="">
        </div>
        <span className="">
          {name}
        </span>
      </Link>
    </div>
  );
} 

export function TextCard({ title, body }: { title: string, body: React.ReactNode }) {
  return (
    <div className="">
      <div className="">
        <h2 className="">{title}</h2>
      </div>
      <div className="">{body}</div>
    </div>
  )
}