import React from 'react'

const Trainer = () => {
  return (
    <>
      <section className='pt-20 pb-48'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-wrap justify-center text-center mb-24'>
            <div className='w-full lg:w-6/12 px-4'>
              <h2 className='text-4xl font-semibold uppercase'>
                Meet Our Trainers
              </h2>
              <p className='text-lg leading-relaxed m-4 '>
                Our trainers are are here to dedicate the time and effort that
                you need to get in the best shape of your life.
              </p>
            </div>
          </div>

          {/* Trainer Card Wrapper */}
          <div className='flex flex-wrap'>
            {/* Card 1 */}
            <div className='w-full md:w-4/12 lg:mb-0 mb-12 px-4'>
              <div className='px-6'>
                <img
                  alt='...'
                  src='https://images.unsplash.com/photo-1541338784564-51087dabc0de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
                  className='shadow-lg rounded max-w-full mx-auto'
                  style={{ maxWidth: '250px', maxHeight: '350px' }}
                />
                <div className='pt-6 text-center'>
                  <h5 className='text-xl font-bold'>Brandy Morgan</h5>
                  <p className='mt-1 text-sm text-gray-500 uppercase font-semibold'>
                    Fittness Care
                  </p>
                  <div className='mt-6'>
                    <button
                      className='bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                      type='button'
                    >
                      <i className='fab fa-facebook-f'></i>
                    </button>
                    <button
                      className='bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                      type='button'
                    >
                      <i className='fab fa-twitter'></i>
                    </button>
                    <button
                      className='bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                      type='button'
                    >
                      <i className='fab fa-instagram'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className='w-full md:w-4/12 lg:mb-0 mb-12 px-4'>
              <div className='px-6'>
                <img
                  alt='...'
                  src='https://images.unsplash.com/photo-1590556409324-aa1d726e5c3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
                  className='shadow-lg rounded max-w-full mx-auto'
                  style={{ maxWidth: '250px', maxHeight: '350px' }}
                />
                <div className='pt-6 text-center'>
                  <h5 className='text-xl font-bold'>Alexa Smith</h5>
                  <p className='mt-1 text-sm text-gray-500 uppercase font-semibold'>
                    Boxing
                  </p>
                  <div className='mt-6'>
                    <button
                      className='bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                      type='button'
                    >
                      <i className='fab fa-facebook-f'></i>
                    </button>
                    <button
                      className='bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                      type='button'
                    >
                      <i className='fab fa-twitter'></i>
                    </button>
                    <button
                      className='bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                      type='button'
                    >
                      <i className='fab fa-instagram'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className='w-full md:w-4/12 lg:mb-0 mb-12 px-4'>
              <div className='px-6'>
                <img
                  alt='...'
                  src='https://images.unsplash.com/photo-1584863431255-3997371dcc01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80'
                  className='shadow-lg rounded max-w-full mx-auto'
                  style={{ maxWidth: '250px', maxHeight: '350px' }}
                />
                <div className='pt-6 text-center'>
                  <h5 className='text-xl font-bold'>Jenna Kardi</h5>
                  <p className='mt-1 text-sm text-gray-500 uppercase font-semibold'>
                    Yoga and Running
                  </p>
                  <div className='mt-6'>
                    <button
                      className='bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                      type='button'
                    >
                      <i className='fab fa-facebook-f'></i>
                    </button>
                    <button
                      className='bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                      type='button'
                    >
                      <i className='fab fa-twitter'></i>
                    </button>
                    <button
                      className='bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                      type='button'
                    >
                      <i className='fab fa-instagram'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Trainer
