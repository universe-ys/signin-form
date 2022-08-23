import { createContext, useRef, useState } from 'react'
import './App.css'
import FontControlbox from './components/FontControlbox'
import Footer from './components/Footer'
import Form from './components/Form'
import Modal from './components/Modal'

const initialFormData = {
    id: '',
    pw: '',
    confirmPw: '',
}

export const FormContext = createContext({
    formData: initialFormData,
    setFormData: () => {},
})

function App() {
    const [formData, setFormData] = useState(initialFormData)
    const modalRef = useRef(null)
    return (
        <FormContext.Provider value={{ formData, setFormData }}>
            <section className="form-wrapper">
                <Form modalRef={modalRef} />
                <Footer />
            </section>
            <FontControlbox />
            <Modal ref={modalRef} />
        </FormContext.Provider>
    )
}

export default App
