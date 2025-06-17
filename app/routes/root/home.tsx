import React from 'react'
import type { Route } from '../../+types/root';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TaskHub" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const HomePage = () => {
  return (
    <div>HomePage</div>
  )
}

export default HomePage