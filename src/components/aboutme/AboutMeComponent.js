import React from 'react'
import { Link } from 'react-router-dom'
import './aboutme.css'

import { AiOutlineWhatsApp, AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";

const AboutMeComponent = () => {
  return (
    <div>
        <div className='container_dataaboutme'>
            <div className='warna'>
              <Link to='/' className='tombol_merah'></Link>
              <Link to='#' className='tombol_kuning'></Link>
              <Link to='#' className='tombol_hijau'></Link>
            </div>
            <h1 className='title_aboutme'>About me</h1>
              <p className='aboutme_component'>
                   Haloo perkenalkan nama saya Erwin Yuliyanto saya sedang menempuh pendidikan di Universitas Nasional jurusan Teknik Informatika semester 7.
                   Pengalaman organisasi saya adalah salah satu pendiri Komunitas Python Universitas Nasional tujuan dibuatnnya komunitas ini untuk ajang silahturahmi antar proggramer.
                   Karena saya melihat salah satu masalah dikampus saya adalah terjadinnya sebuah gap antara adik kelas dan kakak kelas yang akhirnnya bersama teman-teman saya membuat ide untuk membuat komunitas ini yang mungkin sudah berjalan hampir 1 tahun.
                   Setelah terbuatnnya komunitas ini yang juga dibimbing bersama ketua prodi dari teknik informatika menjalani beberapa agenda setiap bulannya yaitu ngobar(ngoding bareng).
              </p>
              <p className='aboutme_component'>
                   
                   Saya seorang Full Stack Developer yang sangat tertarik dibidang 3D web dengan teknologi React Js, Three Js, Spring dan React Frame yang lainnya. dan juga untuk Back end saya tertarik dibidang teknologi mengunakan Node js dan Python.
                   Saya cepat belajar sesuatu hal yang baru dan juga cepat beradaptasi dengan tim dan juga siap berkerja individu maupun tim. Cita-cita saya ingin membuat sebuah aplikasi yang bisa berguna untuk semua orang yang dapat memudahkan hidup dan juga tidak berdampak negatif untuk orang banyak mungkin itu sedikit background saya Terima kasihh.
              </p>
            
            <div>
              <h2 className='career_aboutme'>Skills</h2>
                <ul className='data_about'>
                  <li>Material UI</li>
                  <li>Three JS</li>
                  <li>React JS</li>
                  <li>Express JS</li>
                  <li>JWT</li>
                  <li>Python</li>
                </ul>
            </div>

            <div>
              <h2 className='career_aboutme'>Sertifikat</h2>
                  <ul className='data_about'>
                    <li>Microsoft Technology Associate - HTML5 and CSS</li>
                    <li>Dicoding - Pemgrograman dengan python</li>
                  </ul>
            </div>

            <div>
              <h2 className='career_aboutme'>Software</h2>
                  <ul className='data_about'>
                    <li>OS: Windows</li>
                    <li>Code Editor: Visual Studio Code</li>
                    <li>Testing Api: Postman</li>
                    <li>Upload Code : Github, Git</li>
                  </ul>
            </div>

            <div>
              <h2 className='career_aboutme'>Aktifitas</h2>
                <ul className='data_about'>
                    <li>Ngoding</li>
                    <li>Belajar hal baru dibidang perkembangan teknologi</li>
                    <li>Gaming</li>
                    <li>Rebahann</li>
                  </ul>
            </div>

            <div>
              <h2 className='career_aboutme'>Kontak Saya</h2>
                <ul className='data_kontaksaya'>
                    <p className='reacticon_kontak'><AiOutlineInstagram/>   <a href='#' className='about_kontak'>erwnyy</a></p>
                    <p className='reacticon_kontak'><AiOutlineWhatsApp/>   <a href='#' className='about_kontak'>0896-6857-8211</a></p>
                    <p className='reacticon_kontak'><AiOutlineMail/>   <a href='mailto:erwinyuliyanto49@gmail.com' className='about_kontak'>erwinyuliyanto49@gmail.com</a></p>
                  </ul>
            </div>

        </div>
    </div>
  )
}

export default AboutMeComponent