import {client} from '../lib/client'
import {urlFor} from '../lib/client'
import About from '../Components/about.js'
import Projects from '../Components/projects.js'
import Technologies from '../Components/Technologies'
import Contact from '../Components/Contact.js'
import Footer from '../Components/Footer.js'


export default function IndexPage({ project, technologies }) {
  return (
    <>
    {console.log(technologies)}
       <About projects = {'#projects'} technology={'#technology'} about={'#about'}/>
       <Technologies technologies={technologies} />
       <Projects project={project}/>      
       <Contact />
       <Footer />
    </>
  );
}



export async function getStaticProps() {
  const project = await client.fetch(`*[_type == "project"]`);
  const technologies = await client.fetch(`*[_type == "technologies"]`);


  return {
    props: {
      project,
      technologies,
    }
  };
}
