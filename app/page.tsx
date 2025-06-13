import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/socio-pro');
  return (
    <>
      <p className="font-quantify text-sm font-extralight">Socie-Pro AI</p>
    </>
  );
}
