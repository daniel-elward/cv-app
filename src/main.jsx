import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/style.css'
import Section from './components/section.jsx'
import Personal from './components/personal.jsx'
import Education from './components/education.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Section heading="Personal Details" />
      <Personal />

    <Section heading="Education" />
      <Education />
  </StrictMode>,
)
