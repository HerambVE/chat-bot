const people = [
    {
      name: 'Heramb Vengurlekar',
      role: 'Web Dev',
      imageUrl:
        '/hERAMB-bg.png',
    },
  {
    name: 'Sanya Ramchandani',
    role: 'Ai/Chat-Bot Dev',
    imageUrl:
      '/sANYA-bg.png',
  },
  {
    name: 'Satish Shabade',
    role: 'Operations Management',
    imageUrl:
      '/sATISH-bg.png',
  },
  {
    name: 'Shubham Pandey',
    role: 'Chat-Bot Management',
    imageUrl:
      'sHUBHAM-bg.png',
  },
  // More people...
]

export default function AboutUs() {
  return (
    <div className="bg-white py-24 sm:py-58" id='about-section'>
      <div className="mx-auto grid max-w-10xl gap-20 px-6 lg:px-8 xl:grid-cols-3 relative isolate">
      <div  
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-80 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-60 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>    
        <div className="max-w-xl py-[20%]">
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
            Meet our Team
          </h2>
          <p className="mt-6 text-lg/7 text-gray-600">
            We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
            best results for our clients.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img alt="" src={person.imageUrl} className="size-30 rounded-full" />
                <div>
                  <h3 className="text-xl/7 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-lg/6 font-semibold text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
