import { AtSign, Facebook, Instagram, Phone, Smartphone } from 'lucide-react'

export default function Fotter() {
  return (
    <fotter className="bg-principal flex justify-between items-center py-6 px-5 shadow-md bottom-0">
      <p><AtSign/>Email</p>
      <p><Facebook/>Facebook</p>
      <p><Smartphone/>Celular/Whatsapp</p>
      <p><Phone/>Telefone</p>
      <p><Instagram/>Instagram</p>
    </fotter>
  );
}
