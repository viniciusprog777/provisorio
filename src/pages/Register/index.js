import React, { useState } from 'react'
import './register.css'

import { MdEmail, MdLock } from "react-icons/md"
import { HiEye, HiEyeOff } from "react-icons/hi"
import { BiCalendarAlt, BiUser, BiLockAlt } from "react-icons/bi"
import { Link, useHistory } from 'react-router-dom'
import { api } from '../../services/api'

function Register() {
   const history = useHistory();
   
   const [student, setStudent] = useState({
      name: "",
      email: "",
      date: "",
      password: "",
      validPassword: "",
   })
   const [show, setShow] = useState(false)

   const validPassword = () => student.password === student.validPassword;

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         const { name, email, date, password } = student;

         if (!validPassword()) return alert("As senhas precisam ser iguais!");

         const response = await api.post("/student", {
            name,
            email, 
            date,
            password
         });
         console.log(response);

         alert("Aluno Cadastrada");

         history.push("/home");
      } catch (error) {
         console.error(error);
         alert(error.response.data.error);
      }
   }

   const handleClick = (e) => {
      e.preventDefault()
      setShow(!show);
   }
   const handleInput = (e) => {
      setStudent({ ...student, [e.target.id]: e.target.value });
      console.log(student.date)
    };

   return (
      <div className="register">
         <div className="register-logo">
            <img
               src="https://i.imgur.com/1hBDc51.png"
               alt="Nymer Quizz"
            />
         </div>

         <form className="register-right" onSubmit={handleSubmit}>
            <h1>Cadastrar Nymer</h1>

            <div className="register-registerInputEmail">
               <BiUser />
               <input
                  id="name"
                  type="name"
                  placeholder="Digite seu nome"
                  value={student.name}
                  onChange={handleInput}
               />
            </div>

            <div className="register-registerInputEmail">
               <MdEmail />
               <input
                  id="email"
                  type="email"
                  placeholder="Digite um email"
                  value={student.email}
                  onChange={handleInput}
               />
            </div>
            
            <div className="register-registerInputDate">
               <BiCalendarAlt />
               <input
                  id="date"
                  type="date"
                  placeholder="Digite sua data de nascimento"
                  value={student.date}
                  onChange={handleInput}
               />
            </div>

            <div className="register-registerInputPassword">
               <BiLockAlt />
               <input
                  id="password"
                  placeholder="Digite sua senha"
                  type={show ? "text" : "password"}
                  value={student.password}
                  onChange={handleInput}
               />
               <div className="register-eye">
                  {show ? (
                     <HiEye
                        size={20}
                        onClick={handleClick}
                     />
                  ) : (
                        <HiEyeOff
                           size={20}
                           onClick={handleClick}
                        />
                     )}
               </div>
            </div>

            <div className="register-registerInputPassword2">
               <MdLock />
               <input
                  id="validPassword"
                  placeholder="Confirme sua senha"
                  type={show ? "text" : "password"}
                  value={student.validPassword}
                  onChange={handleInput}
               />
               <div className="register-eye">
                  {show ? (
                     <HiEye
                        size={20}
                        onClick={handleClick}
                     />
                  ) : (
                        <HiEyeOff
                           size={20}
                           onClick={handleClick}
                        />
                     )}
               </div>
            </div>

            <button type="submit">
               Cadastrar
            </button>
            <button>
               <Link to="/"> Entrar</Link>
            </button>
         </form>
      </div>
   )
}

export default Register

