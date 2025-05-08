import Image from 'next/image'
import React from 'react'
import image from '../assets/import.jpg'
import fifth from '../styles/fifth.module.scss'

const Fifith = () => {
  return (
    <div className={fifth.container}>
      <div className={fifth.left}>
        <h1>The Importance of Education and Support Throughout the Transition Process</h1>
        <p>We understand that transitioning is not just about surgery—it's about empowerment and healing. That's why we also provide counseling, community outreach, and a strong support network.</p>
      </div>
      <div className={fifth.right}>
        <Image src={image}/>
      </div>
    </div>
  )
}

export default Fifith
