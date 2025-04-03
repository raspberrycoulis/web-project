// components/ProjectCard.js
import Image from 'next/image';

const ProjectCard = ({ title, description, imageUrl, link }) => {
  return (
    <div className="group relative bg-white shadow-lg rounded overflow-hidden transform transition-all duration-500 hover:scale-105 filter hover:brightness-90">
      {imageUrl && (
        <div className="relative w-full h-48">
          <Image 
            src={imageUrl} 
            alt={title} 
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-primary mt-4 inline-block hover:underline"
          >
            Learn More
          </a>
        )}
      </div>
      {/* Right-side gradient glow line that appears on hover */}
      <div 
        className="absolute top-0 right-0 h-full w-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(to bottom, #ff008c, #00ffff)' }}
      />
    </div>
  )
}

export default ProjectCard;
