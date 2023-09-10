import React from 'react'
import ResumePDF from '../../assets/Resume_v4.pdf'
// import ResumeWord from '../../assets/Resume_v2.docx'
export const CTA = () => {
  return (
    <div className='cta'>
        {/* <a href={ResumePDF} download className='btn'>Download Resume</a> */}
        <a target='_blank' rel="noreferrer" href={ResumePDF} download className='btn' >Download Resume</a>
        <a target='_blank' rel="noreferrer" href='https://www.credly.com/badges/b12f19a6-43c8-4927-bb04-bc6cb9667b81/linked_in_profile' className='btn'>View Certification</a>

    </div>
  )
}

export default CTA