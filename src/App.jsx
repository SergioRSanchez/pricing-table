import { ReactComponent as Check } from './assets/check.svg';
import { ReactComponent as Info } from './assets/info.svg';


function App() {

  return (
    <div className='font-["Titillium_Web"] bg-[#F8FAFC] sm:h-screen flex flex-col gap-10 sm:gap-0 justify-between sm:flex-row py-20 px-5 sm:px-28 sm:items-center'>
      <section className='border-[#E2E8F0] border-2 rounded-xl bg-white p-6 sm:px-8 sm:pt-12 sm:pb-8 flex flex-col gap-4 sm:gap-8 sm:h-[454px] hover:border-[#996DFF] duration-200'>
        <div className='flex flex-col gap-2'>
          <p className='text-[#7C3AED] font-semibold text-sm uppercase'>Para você começar</p>
          
          <div className='flex items-center justify-between'>
            <p className='text-[#1E293B] font-bold text-2xl sm:text-[32px]'>Essentials</p>
            <p className='text-[#1E293B] text-lg'>R$ <strong>19,97/mês</strong></p>
          </div>
        </div>

        <button className='text-[#1E293B] font-bold py-4 sm:px-[88px] border-2 rounded-md border-[#1E293B] hover:bg-[#1E293B] hover:text-[#FFFFFF] duration-200'>Assinar agora</button>

        <div className='h-[1px] bg-[#E2E8F0]'></div>

        <div className='flex flex-col gap-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <Check className='fill-[#1B873F]' />
              <p className='text-[#475569]'>Até 3 usuários</p>
            </div>
            <Info className='stroke-[#0F172A]' />
          </div>
          
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <Check className='fill-[#1B873F]' />
              <p className='text-[#475569]'>Autoatendimento</p>
            </div>
            <Info className='stroke-[#0F172A]' />
          </div>
        </div>

      </section>

      <section className='rounded-xl bg-[#0F172A] p-6 pt-10 sm:px-8 sm:pt-12 sm:pb-8 flex flex-col gap-4 sm:gap-8 relative sm:h-[454px]'>
        <div style={{left: 'calc(50% - 133px/2 - 0.5px)'}} className='bg-[#FBA94C] text-[#0F172A] text-xs font-bold py-2 px-4 rounded-md absolute uppercase -top-[17px] '>Mais vantajoso</div>
        <div className='flex flex-col gap-2'>
          <p className='text-[#996DFF] font-semibold text-sm uppercase'>Para você decolar</p>

          <div className='flex items-center justify-between'>
            <p className='text-[#F8FAFC] font-bold text-2xl sm:text-[32px]'>Ultimate</p>
            <p className='text-[#F8FAFC] text-lg'>R$ <strong>29,97/mês</strong></p>
          </div>
        </div>

        <button className='text-[#FFFFFF] bg-[#996DFF] font-bold py-4 sm:px-[88px] rounded-md border-[#1E293B] hover:bg-[#7C3AED] duration-200'>Assinar agora</button>

        <div className='h-[1px] bg-[#334155]'></div>

        <div className='flex flex-col gap-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <Check className='fill-[#04D361]' />
              <p className='text-[#CBD5E1]'>Usuários ilimitados</p>
            </div>
            <Info className='stroke-[#64748B]' />
          </div>
          
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <Check className='fill-[#04D361]' />
              <p className='text-[#CBD5E1]'>Suporte 24/7</p>
            </div>
            <Info className='stroke-[#64748B]' />
          </div>
          
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <Check className='fill-[#04D361]' />
              <p className='text-[#CBD5E1]'>CSM Dedicado</p>
            </div>
            <Info className='stroke-[#64748B]' />
          </div>
          
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <Check className='fill-[#04D361]' />
              <p className='text-[#CBD5E1]'>Treinamentos</p>
            </div>
            <Info className='stroke-[#64748B]' />
          </div>

        </div>
      </section>

      <section className='border-[#E2E8F0] border-2 rounded-xl bg-white p-6 sm:px-8 sm:pt-12 sm:pb-8 flex flex-col gap-8 sm:gap-8 sm:h-[454px] hover:border-[#996DFF] duration-200'>
        <div className='flex flex-col gap-2'>
          <p className='text-[#7C3AED] font-semibold text-sm uppercase'>Para sua empresa</p>
          
          <div className='flex items-center justify-between'>
            <p className='text-[#1E293B] font-bold text-[32px]'>Enterprise</p>
          </div>
        </div>

        <button className='text-[#1E293B] font-bold py-4 sm:px-[86px] border-2 rounded-md border-[#1E293B] hover:bg-[#1E293B] hover:text-[#FFFFFF] duration-200'>Fale com a gente</button>

        <div className='h-[1px] bg-[#E2E8F0]'></div>

        <div className='flex flex-col gap-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <Check className='fill-[#1B873F]' />
              <p className='text-[#475569] w-[229px] sm:w-[244px]'>Plano customizado especialmente para a necessidade de seu negocio</p>
            </div>
            <Info className='stroke-[#FFFFFF]' />
          </div>
        </div>

      </section>
    </div>
  )
}

export default App
