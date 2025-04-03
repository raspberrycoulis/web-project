// pages/index.js
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'

export default function Home() {
  const projects = [
    {
      title: 'Project One',
      description: 'A brief description of project one.',
      imageUrl: 'https://picsum.photos/600/400',
      link: '#'
    },
    {
      title: 'Project Two',
      description: 'A brief description of project two.',
      imageUrl: 'https://picsum.photos/600/400',
      link: '#'
    },
    {
      title: 'Project Three',
      description: 'A brief description of project three.',
      imageUrl: 'https://picsum.photos/600/400',
      link: '#'
    },
  ]
  
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 dark:text-white transition-colors duration-500">
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Portfolio website showcasing key skills and experience" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold">Welcome to My Portfolio</h2>
          <p className="mt-4">
            I am a skilled developer with experience in modern web technologies. Explore my projects and get to know my work.
          </p>
        </section>
        
        {/* About Section */}
        <section id="about" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p>
            I specialize in building fast, responsive websites using the latest frameworks and technologies. My focus is on creating user-friendly interfaces and efficient, scalable code.
          </p>
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p>
            Feel free to reach out via email at{" "}
            <a href="mailto:your.email@example.com" className="text-primary hover:underline">
              your.email@example.com
            </a>.
          </p>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
