import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/style.css'
import Section from './components/section.jsx'
import Personal from './components/personal.jsx'
import Education from './components/education.jsx'
import Work from './components/work.jsx'
import Banner from './components/banner.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Banner />

    <Section heading="Personal Details" />
      <Personal />

    <Section heading="Education" />
      <Education />

    <Section heading="Work Experience" />
      <Work />
  </StrictMode>,
)
