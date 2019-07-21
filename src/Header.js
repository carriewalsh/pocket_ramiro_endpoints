import React, { Component } from 'react';
import pr_logo from './pr_logo.png';
import './stylesheets/Header.css'

export default function Header() {
  return (
    <header className="App-header">
      <a class="logo-link" href="/">
        <img src={pr_logo} alt="PocketRamiro logo"/>
      </a>
      <a class="logo-link" href="/">
        <h1 class="right header-width">Pocket Ramiro - Documentation</h1>
      </a>
    </header>
  )
}
