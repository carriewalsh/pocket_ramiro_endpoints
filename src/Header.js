import React, { Component } from 'react';
import pr_logo from './pr_logo.png';

export default function Header() {
  return (
    <header className="App-header">
      <a class="logo-link" href="/">
        <img src={pr_logo} alt="PocketRamiro logo"/>
      </a>
      <a class="logo-link" href="/">
        <h1 class="right">Pocket Ramiro - Documentation</h1>
      </a>
    </header>
  )
}
