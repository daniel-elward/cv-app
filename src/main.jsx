import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/style.css'
import Section from './components/section.jsx'
import UserInput from './components/userInput.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Section heading="Personal Details" />
      <UserInput />

      {/* <UserInput inputName="Name" />
      <UserInput inputName="Age" />
      <UserInput inputName="Email" /> */}
  </StrictMode>,
)
