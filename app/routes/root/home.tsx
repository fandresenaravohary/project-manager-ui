import React from 'react'
import type { Route } from '../../+types/root';
import { Button } from '@/components/ui/button';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TaskHub" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const HomePage = () => {
  return (
    <div>
        <Button>Click me</Button>
    </div>
  )
}

export default HomePage