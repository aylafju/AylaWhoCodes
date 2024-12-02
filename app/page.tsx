import Image from 'next/image';

const projects = [
  {
    title: 'EasyWaitlist',
    description: 'Effortless no-code waitlist creation with powerful features. Build hype, collect emails, and manage signups with ease—all in one place.',
    link: 'https://easywaitlist.io',
    ogImage: '/opengraph-image-easywaitlist.png', // Replace with actual image path
  },
  {
    title: 'btc insights',
    description: 'Cut through the blockchain chaos. Advanced Bitcoin insights for investors seeking results, not noise.',
    link: 'https://btc-insights.com',
    ogImage: '/opengraph-image-btc-insights.png', // Replace with actual image path
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
    {/* <div className="min-h-screen bg-gradient-to-br from-pink-500 to-orange-400 text-white font-sans"> */}
      {/* Header Section */}
      <header className="relative w-full h-64">
        <Image
          src="/Profile_Banner_Website.png" // Path to your uploaded image
          alt="Profile Banner"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          priority
        />
        <div className="sm:hidden absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-3xl md:text-5xl font-bold text-center px-4">
            Building stuff that makes you happy, makes me happy
          </h1>
        </div>
        <h1 className="sr-only text-3xl md:text-5xl font-bold text-center px-4">
            Building stuff that makes you happy, makes me happy
        </h1>
      </header>

      {/* Projects Section */}
      <main className="py-10 px-6 md:px-20">
        <h2 className="text-4xl font-semibold mb-6 lg:mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-100 rounded-lg shadow-lg overflow-hidden text-gray-900"
            >
              <Image
                src={project.ogImage}
                alt={`${project.title} OG Image`}
                width={1200}
                height={630}
                className="object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
                >
                  Visit Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-4">
        <p>&copy; {new Date().getFullYear()} AylaWhoCodes. All rights reserved.</p>
      </footer>
    </div>
  );
}
