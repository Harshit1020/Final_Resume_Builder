import React from 'react'
import css from "./About.module.css"
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className={css.abc}>
      <div className={css.txt}><h1>About us</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero animi consectetur quo a ipsum magnam excepturi accusantium? Blanditiis provident possimus eos vero modi fugit et sit laboriosam. Quisquam, qui iure.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic necessitatibus tempore dignissimos, magnam praesentium obcaecati perspiciatis, ipsa molestiae distinctio iure unde veritatis! A nemo aliquid, perspiciatis quam facere magnam vero repellat dolore molestias asperiores magni autem nam distinctio qui fuga?
        </p>
      </div>
    <div className={css.icon}>

      <Link className={css.txt2}>Facebook</Link>
      <Link className={css.txt3}>Instagram</Link>
      <Link className={css.txt4}>Twitter</Link>
      <Link className={css.txt5}>Linkedln</Link>

    </div>
    </div>
  )
}
export default About