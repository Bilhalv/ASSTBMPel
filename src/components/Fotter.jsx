import { AtSign, Facebook, Instagram, Phone, Smartphone } from 'lucide-react'

export default function Fotter() {
  return (
    <fotter className="bg-principal flex justify-between items-center py-6 px-5 shadow-md bottom-0">
      <p className='flex'><AtSign/>Email</p>
      <p className='flex'><Facebook/>Facebook</p>
      <p className='flex'><Smartphone/>Celular/Whatsapp</p>
      <p className='flex'><Phone/>Telefone</p>
      <p className='flex'><Instagram/>Instagram</p>
    </fotter>
  );
}
