"use client";

import Image from 'next/image'
import styles from "@/styles/profile.module.css"
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';

const details = [
  {title:'BIOGRAPHY',
  text:'Bldr. Damilare is an accomplished professional in the construction industry, with a diverse range of experience and a passion for delivering high-quality projects. As the CEO of Green Builderss, Bldr. Damilare leads a dynamic team dedicated to creating exceptional living spaces and bridging the housing deficit in Nigeria.'
},
{
  title:'Education and Credentials',
  text:'Bldr. Damilare is a graduate of the Obafemi Awolowo University, where he got a degree in Building construction Management. His commitment to professional growth is evident through his attainment of chartered builder status both locally and internationally, certified by CORBON and CIOB respectively.'
},
{
  title:'Career Highlights',
  text:'With over 13 years of industry experience, Bldr. Damilare has made significant contributions across various sectors of the construction field. He embarked on His career as a structural engineer, working on prestigious projects such as the Land Mark Towers and Vita Towers in VI, showcasing his expertise in delivering complex and innovative designs. Transitioning to the construction domain, Bldr. Damilare joined Ospaces Construction, where he managed notable projects including Lakowe Golf Estate, Corona School in Abijo GRA, Giuliano by Sujimoto, Imota rice Mill, Yaba & Oshodi Lag Bus service station and the Union Bank Marina Refurbishment (Nigeria tallest building). His portfolio also includes collaborations with renowned developers such as Damilare Backer, Zylus, MKH, and GMH Luxury.',
},
{
  title:'International Experience',
  text:'Demonstrating His versatility and global reach, Bldr. Damilare has gained international exposure by working on prominent projects abroad. He was involved in the largest nuclear power project in the United Kingdom, as well as contributing to England longest and fastest rail project, valued at over £100 billion.'
},
{
  title:'Real Estate and Green Builders',
  text:`assionate about making a lasting impact, Bldr Damilare founded Green Builders Construction, a limited liability company committed to excellence in construction and development. Green Builders Construction commenced Development operations in October 2021 and has already achieved remarkable milestones. ${<br/>} Under the visionary leadership of Bldr Damilare, Green Builders has embarked on several noteworthy projects, including the development of Alice Court Series. Inspired by Bldr Damilare's mother, Alice Court is a testament to his commitment to honour his mother while delivering exceptional properties. Alice Court 1, a collection of three units comprising a semi-detached and fully detached house in Gbagada, was completed within an impressive timeframe of 7months—from October 2021 to April 2022. ${<br/>}
  Building upon her success, Alice Court 2 is currently under construction—a four-story structure housing nine apartments. Despite commencing work (above Foundation) in December 2022, the project is already progressing rapidly, with the POP wall plastering phase in full swing. Alice Court 3 represents her latest endeavour, with pile foundation completed, and a projected delivery date of December 2023.`
},
{
  title:'Core Values and Future Outlook',
  text:`As a young, vibrant, and energetic company, Green Builders places great emphasis on quality delivery and adhering to project timelines. Bldr. Damilare and his dedicated team are eager to collaborate with realtors and investors in their mission to address Nigeria's housing deficit. With an expanding portfolio and a commitment to excellence, Green Builders aims to create lasting legacies and transform the construction landscape. ${<br/>}
  By leveraging His expertise, passion, and unwavering dedication to his craft, Bldr. Damilare is poised to shape the future of construction and contribute to the sustainable growth of the industry.`
}

]
export default function Profile() {

  return (
    <>
      <NavBar />
      {/* Hero Section */}
        <PageHero pageTitle={"About the CEO"} pageImage='dare' position='top' />
        <section className={styles.profileSection}>
            <div className={styles.ceoDetails}>
                <div className={styles.ceoImageContainer}>
                    <Image src={"/images/HeroImages/dare.png"} alt='Awonuga Oluwadamilare Timothy' fill style={{objectFit: "cover", objectPosition:'top'}} />
                </div>
                <div className={styles.textDetails}>
                    <h2>Awonuga Oluwadamilare Timothy <span>(CORBON, CIOB)</span></h2>
                    <p>CEO/FOUNDER</p>
                </div>
            </div>
            <div className={styles.aboutContainer}>
              {
                details.map((item,idx)=>(
              <div className='flex flex-col gap-2' key={idx}>
             <h3 className='text-green'>{item.title}</h3>
            <p>{item.text}</p>
              </div>
                ))
              }
            </div>
        </section>
      <Footer />
    </>
  )
}