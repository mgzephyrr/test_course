import React from 'react'

const Home = () => {
  const now = new Date();

  const time = now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat('ru-RU', { dateStyle: 'full' })).format(now);

  return (
    <section className='flex size-full flex-col gap-10 text-white'>
      <div className='h-[300px] w-full rounded-[20px] bg-hero bg-cover bg-zinc-500 bg-blend-multiply'>
        <div className='flex h-full flex-col justify-between max-md:px-5 max-md:py-8: lg:p-11'>
          <h2 className='max-w-[360px] rounded py-2 text-center test-base font-normal'>
            Ближайшее мероприятие: 28 апреля 19:30
          </h2>
          <div className='flex flex-col gap-2 w-fit'>
            <h1 className='text-4xl font-extrabold lg:text-7xl text-test'>{time}</h1>
            <p className='text-lg font-medium lg:text-2xl text-sky-1'>{date}</p>
          </div>
        </div>
      </div>


    </section>
  )
}

export default Home
